import { Infinity, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const cards = [
    { name: "Snapchat+", nameAr: "سناب شات بلس", color: "from-yellow-400 to-yellow-500", icon: "👻" },
    { name: "Telegram", nameAr: "تيليجرام مميز", color: "from-sky-400 to-sky-600", icon: "✈️" },
    { name: "Verified", nameAr: "توثيق فيسبوك وانستا", color: "from-blue-500 to-purple-600", icon: "✓" },
    { name: "FB Ads", nameAr: "اعلانات ممولة", color: "from-blue-600 to-blue-800", icon: "📢" },
    { name: "ChatGPT+", nameAr: "شات جي بي تي بلس", color: "from-emerald-500 to-teal-600", icon: "🤖" },
    { name: "Netflix", nameAr: "نتفلكس", color: "from-red-600 to-red-800", icon: "N" },
    { name: "PUBG UC", nameAr: "شدات ببجي", color: "from-orange-500 to-yellow-500", icon: "🎮" },
    { name: "TikTok", nameAr: "عملات تيك توك", color: "from-black to-gray-800", icon: "♪" },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 gradient-overlay pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-muted/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-64 lg:w-80 h-40 sm:h-64 lg:h-80 bg-muted/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '-1.5s' }} />

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-foreground tracking-wider mb-4 sm:mb-6 lg:mb-8 animate-fade-in-up">
          GIFT CARDS
        </h1>

        {/* Features */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-8 mb-8 sm:mb-10 lg:mb-12">
          <div className="flex items-center gap-2 text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-sm sm:text-base lg:text-lg">تنوع كبير في البطاقات</span>
            <Infinity className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex items-center gap-2 text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <span className="text-sm sm:text-base lg:text-lg">خيارات دفع متعددة وآمنة</span>
            <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        {/* Gift Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12 px-2">
          {cards.map((card, index) => (
            <div 
              key={card.name}
              className="floating-card animate-scale-in group cursor-pointer"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className={`w-full h-24 sm:h-28 md:h-32 rounded-xl card-shadow bg-gradient-to-br ${card.color} overflow-hidden relative transition-transform duration-300 group-hover:scale-105`}>
                {/* Icon/Logo */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-xl text-white font-bold">{card.icon}</span>
                </div>
                
                {/* Content */}
                <div className="flex flex-col items-center justify-center h-full pt-4">
                  <span className="text-base sm:text-lg md:text-xl font-black text-white tracking-tight">{card.name}</span>
                  <p className="text-[10px] sm:text-xs text-white/80 mt-1">{card.nameAr}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button 
          variant="cta"
          size="lg"
          className="animate-fade-in-up text-sm sm:text-base lg:text-lg px-6 sm:px-8"
          style={{ animationDelay: '1.2s' }}
        >
          تسـوق الآن
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
