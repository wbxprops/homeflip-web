import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LetterSection } from "@/components/LetterSection";
import { ProofSection } from "@/components/ProofSection";
import { LeadSourceTraps } from "@/components/LeadSourceTraps";
import { Comparison } from "@/components/Comparison";
import { Features } from "@/components/Features";
import { Objections } from "@/components/Objections";
import { FinalCTA } from "@/components/FinalCTA";
import { StatsBar } from "@/components/StatsBar";
import { CTABlock } from "@/components/CTABlock";

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#83d4c0]/20">
      <Navbar />
      <main>
        <Hero />
        <LetterSection />
        <ProofSection />
        <LeadSourceTraps />
        <StatsBar />
        <Comparison />
        <CTABlock headline="Stop chasing cold leads. Start closing hot ones." />
        <Features />
        <Objections />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
