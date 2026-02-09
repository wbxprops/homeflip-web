import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ulrbhvudbladroixdttw.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

interface ProspectUpsertBody {
  email: string;
  name?: string;
  phone?: string;
  source: string;
  jurisdictions_requested?: Array<{ state: string; counties: string[] }>;
  tracking_params?: Record<string, string>;
}

export async function POST(request: NextRequest) {
  if (!supabaseServiceKey) {
    console.error('SUPABASE_SERVICE_KEY not configured');
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

  try {
    const body: ProspectUpsertBody = await request.json();

    if (!body.email || !body.source) {
      return NextResponse.json(
        { error: 'email and source are required' },
        { status: 400 }
      );
    }

    const prospectData: Record<string, unknown> = {
      email: body.email,
      source: body.source,
    };

    if (body.name) prospectData.name = body.name;
    if (body.phone) prospectData.phone = body.phone;
    if (body.jurisdictions_requested) prospectData.jurisdictions_requested = body.jurisdictions_requested;
    if (body.tracking_params && Object.keys(body.tracking_params).length > 0) {
      prospectData.tracking_params = body.tracking_params;
    }

    const { data, error } = await supabaseAdmin
      .from('prospects')
      .upsert([prospectData], { onConflict: 'email' })
      .select('id, email');

    if (error) {
      console.error('Prospects upsert error:', error);
      return NextResponse.json(
        { error: 'Failed to save prospect' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error in prospects upsert:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
