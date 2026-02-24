import Header from "@/components/Header";
import HeroVideo from "@/components/HeroVideo";
import TrustBar from "@/components/TrustBar";
import AuthorityIntro from "@/components/AuthorityIntro";
import ServicesGrid from "@/components/ServicesGrid";
import HRFStandard from "@/components/HRFStandard";
import ProcessTimeline from "@/components/ProcessTimeline";
import LocalKnowledge from "@/components/LocalKnowledge";
import FeaturedWork from "@/components/FeaturedWork";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroVideo />
        <TrustBar />
        <AuthorityIntro />
        <ServicesGrid />
        <HRFStandard />
        <ProcessTimeline />
        <LocalKnowledge />
        <FeaturedWork />
        <TestimonialsPreview />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <MobileCallButton />
    </>
  );
}
