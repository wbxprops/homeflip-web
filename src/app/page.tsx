import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Problem } from "@/components/Problem";
import { Comparison } from "@/components/Comparison";
import { WhyProbate } from "@/components/WhyProbate";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Objections } from "@/components/Objections";
import { FinalCTA } from "@/components/FinalCTA";
import { StatsBar } from "@/components/StatsBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0118] selection:bg-[#22d3ee]/30">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <StatsBar />
        <Comparison />
        <WhyProbate />
        <HowItWorks />
        <Features />
        <Objections />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
