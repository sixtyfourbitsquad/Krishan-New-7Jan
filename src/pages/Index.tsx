import TopBar from "@/components/TopBar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import TelegramPushSection from "@/components/TelegramPushSection";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <div className="pt-10">
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <TelegramPushSection />
        <Footer />
      </div>
      <FloatingCTA />
    </main>
  );
};

export default Index;
