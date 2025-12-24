import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LetterSection } from "@/components/LetterSection";
import { SocialProof } from "@/components/SocialProof";
import { Problem } from "@/components/Problem";
import { Comparison } from "@/components/Comparison";
import { WhyProbate } from "@/components/WhyProbate";
import { HowItWorks } from "@/components/HowItWorks";
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
        <SocialProof />
        <Problem />
        <StatsBar />
        <Comparison />
        <CTABlock headline="Stop chasing cold leads. Start closing hot ones." />
        <WhyProbate />
        <HowItWorks />
        <CTABlock headline="Your market is moving. Don't let it pass you by." />
        <Features />
        <Objections />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
