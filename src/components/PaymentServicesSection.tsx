import { HelpCircle, Banknote } from "lucide-react";
import PaymentMethod from "./PaymentMethod";

const PaymentServicesSection = () => {
  const paymentMethods = [
    { name: "لي باي", icon: <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center overflow-hidden bg-white"><img src="https://lypay.gov.ly/wp-content/uploads/2025/06/ly-pay-logo.svg" alt="Ly Pay" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" /></div> },
    { name: "ون باي", icon: <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center overflow-hidden bg-white"><img src="https://masarat.ly/ms_uploads/2025/10/OnePay-Full-Logo.svg" alt="One Pay" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" /></div> },
    { name: "كاش", icon: <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center overflow-hidden"><img src="https://png.pngtree.com/png-clipart/20221228/original/pngtree-5-libyan-dinar-stack-pile-png-image_8816158.png" alt="Cash" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" /></div> },
    { name: "ليبيانا", icon: <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center"><span className="text-white text-lg sm:text-xl font-bold">iy</span></div> },
    { name: "مدار", icon: <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center"><div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white rounded-full" /></div> },
  ];

  return (
    <section className="relative flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 gradient-overlay pointer-events-none" />
      <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-40 sm:w-64 h-40 sm:h-64 bg-muted/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-48 sm:w-80 h-48 sm:h-80 bg-muted/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '-1.5s' }} />

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        {/* Icon */}
        <div className="flex justify-center mb-4 sm:mb-6 animate-fade-in-up">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-muted/30 flex items-center justify-center">
            <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-foreground" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 sm:mb-10 lg:mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          ايش نقبلو؟
        </h2>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-5 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          {paymentMethods.map((method, index) => (
            <PaymentMethod 
              key={method.name} 
              name={method.name} 
              icon={method.icon}
              className="animate-scale-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentServicesSection;
