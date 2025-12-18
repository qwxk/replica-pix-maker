import { Handshake, DollarSign, CreditCard, Wallet, Banknote } from "lucide-react";
import PaymentMethod from "./PaymentMethod";

const PaymentServicesSection = () => {
  const paymentMethods = [
    { name: "ادفعلي", icon: <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center"><span className="text-white text-xs font-bold">ادفعلي</span></div> },
    { name: "موبي كاش", icon: <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center"><Wallet className="w-6 h-6 text-white" /></div> },
    { name: "ون باي", icon: <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center"><span className="text-white text-lg font-bold">1</span></div> },
    { name: "لي باي", icon: <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center"><CreditCard className="w-6 h-6 text-white" /></div> },
    { name: "USDT", icon: <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center"><span className="text-white text-lg font-bold">₮</span></div> },
    { name: "بريموتك", icon: <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center"><span className="text-white text-sm font-bold">PT</span></div> },
    { name: "ليبيانا", icon: <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center"><span className="text-white text-xl font-bold">iy</span></div> },
    { name: "مدار", icon: <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center"><div className="w-6 h-6 border-2 border-white rounded-full" /></div> },
    { name: "باي بال", icon: <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center"><span className="text-white text-sm font-bold">P</span></div> },
    { name: "كاش", icon: <div className="w-12 h-12 bg-gradient-to-br from-green-300 to-green-500 rounded-lg flex items-center justify-center"><Banknote className="w-6 h-6 text-white" /></div> },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center px-4 py-12 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 gradient-overlay pointer-events-none" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-muted/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-muted/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '-1.5s' }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Icon */}
        <div className="flex justify-center mb-6 animate-fade-in-up">
          <div className="w-20 h-20 rounded-full bg-muted/30 flex items-center justify-center">
            <Handshake className="w-10 h-10 text-foreground" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-black text-foreground mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          خدمات الدفع
        </h2>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-4 gap-4 md:gap-8 mb-8">
          {paymentMethods.slice(0, 4).map((method, index) => (
            <PaymentMethod 
              key={method.name} 
              name={method.name} 
              icon={method.icon}
              className="animate-scale-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` } as any}
            />
          ))}
        </div>

        <div className="grid grid-cols-4 gap-4 md:gap-8 mb-8">
          {paymentMethods.slice(4, 8).map((method, index) => (
            <PaymentMethod 
              key={method.name} 
              name={method.name} 
              icon={method.icon}
              className="animate-scale-in"
              style={{ animationDelay: `${0.6 + index * 0.1}s` } as any}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-md mx-auto">
          {paymentMethods.slice(8, 10).map((method, index) => (
            <PaymentMethod 
              key={method.name} 
              name={method.name} 
              icon={method.icon}
              className="animate-scale-in"
              style={{ animationDelay: `${1 + index * 0.1}s` } as any}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentServicesSection;
