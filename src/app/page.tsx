import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Comparison } from "@/components/Comparison";
import { WhyProbate } from "@/components/WhyProbate";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Objections } from "@/components/Objections";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <main>
        <Hero />
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
