import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PaymentServicesSection from "@/components/PaymentServicesSection";
import Footer from "@/components/Footer";
import PrintContextMenu from "@/components/PrintContextMenu";

function Index() {
  return (
    <PrintContextMenu>
      <div className="h-screen overflow-hidden gradient-bg flex flex-col">
        <div className="pattern-hex" />
        <Header />
        <main className="flex-1 overflow-hidden flex flex-col">
          <HeroSection />
        </main>
        <Footer />
      </div>
    </PrintContextMenu>
  );
}

export default Index;
