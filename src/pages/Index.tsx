import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PaymentServicesSection from "@/components/PaymentServicesSection";
import Footer from "@/components/Footer";
import PrintContextMenu from "@/components/PrintContextMenu";

const Index = () => {
  return (
    <PrintContextMenu>
      <div className="min-h-screen gradient-bg">
        <Header />
        <main>
          <HeroSection />
          <PaymentServicesSection />
        </main>
        <Footer />
      </div>
    </PrintContextMenu>
  );
};

export default Index;
