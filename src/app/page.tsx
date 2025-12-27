import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LetterSection } from "@/components/LetterSection";
import { LeadSourceTraps } from "@/components/LeadSourceTraps";
import { Comparison } from "@/components/Comparison";
import { Features } from "@/components/Features";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { CTABlock } from "@/components/CTABlock";
import { Objections } from "@/components/Objections";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#83d4c0]/20">
      <Navbar />
      <main>
        <Hero />
        <LetterSection />
        <LeadSourceTraps />
        <Comparison />
        <InteractiveDemo />
        <Features />
        <CTABlock />
        <Objections />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
