import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '2645391379150401';
const FB_ACCESS_TOKEN = process.env.FB_CONVERSIONS_API_TOKEN;

// Meta Conversions API endpoint
const FB_CONVERSIONS_API_URL = `https://graph.facebook.com/v18.0/${FB_PIXEL_ID}/events`;

// Hash function for PII (required by Conversions API)
function hashData(data: string): string {
  return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
}

// Normalize phone number (remove non-digits, ensure country code)
function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  // Add US country code if not present
  if (digits.length === 10) {
    return '1' + digits;
  }
  return digits;
}

interface ConversionRequestBody {
  eventName: 'Lead' | 'Schedule' | 'CompleteRegistration' | 'Contact';
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  state?: string;
  contentName?: string;
  value?: number;
  currency?: string;
  // Browser data for deduplication
  eventId?: string;
  clientUserAgent?: string;
  clientIpAddress?: string;
  fbc?: string; // Facebook click ID cookie
  fbp?: string; // Facebook browser ID cookie
}

export async function POST(request: NextRequest) {
  if (!FB_ACCESS_TOKEN) {
    console.error('FB_CONVERSIONS_API_TOKEN not configured');
    return NextResponse.json(
      { error: 'Conversions API not configured' },
      { status: 500 }
    );
  }

  try {
    const body: ConversionRequestBody = await request.json();

    // Build user_data object with hashed PII
    const userData: Record<string, string> = {};

    if (body.email) {
      userData.em = hashData(body.email);
    }
    if (body.phone) {
      userData.ph = hashData(normalizePhone(body.phone));
    }
    if (body.firstName) {
      userData.fn = hashData(body.firstName);
    }
    if (body.lastName) {
      userData.ln = hashData(body.lastName);
    }
    if (body.state) {
      userData.st = hashData(body.state);
    }

    // Add browser/client data for better matching
    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0] ||
                     request.headers.get('x-real-ip') ||
                     '';
    const clientUserAgent = request.headers.get('user-agent') || '';

    if (clientIp) {
      userData.client_ip_address = clientIp;
    }
    if (clientUserAgent) {
      userData.client_user_agent = clientUserAgent;
    }

    // Facebook click/browser IDs from cookies (if provided)
    if (body.fbc) {
      userData.fbc = body.fbc;
    }
    if (body.fbp) {
      userData.fbp = body.fbp;
    }

    // Build the event data
    const eventData: Record<string, unknown> = {
      event_name: body.eventName,
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_source_url: request.headers.get('referer') || 'https://homeflip.ai',
      user_data: userData,
    };

    // Add event ID for deduplication with client-side pixel
    if (body.eventId) {
      eventData.event_id = body.eventId;
    } else {
      // Generate a unique event ID
      eventData.event_id = `${body.eventName}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    // Add custom data
    const customData: Record<string, unknown> = {};
    if (body.contentName) {
      customData.content_name = body.contentName;
    }
    if (body.value) {
      customData.value = body.value;
      customData.currency = body.currency || 'USD';
    }
    if (Object.keys(customData).length > 0) {
      eventData.custom_data = customData;
    }

    // Send to Meta Conversions API
    const response = await fetch(FB_CONVERSIONS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [eventData],
        access_token: FB_ACCESS_TOKEN,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Conversions API error:', result);
      return NextResponse.json(
        { error: 'Conversions API request failed', details: result },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      events_received: result.events_received,
      fbtrace_id: result.fbtrace_id,
    });

  } catch (error) {
    console.error('Error sending conversion event:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
