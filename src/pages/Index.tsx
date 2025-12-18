import HeroSection from "@/components/HeroSection";
import PaymentServicesSection from "@/components/PaymentServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <main>
        <HeroSection />
        <PaymentServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
