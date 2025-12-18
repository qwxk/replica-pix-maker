import { Infinity, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CardData {
  name: string;
  subName?: string;
  gradient: string;
  price?: string;
  position: string;
  rotation: string;
  zIndex: number;
  delay: number;
  logoType: 'text' | 'icon';
  textSize?: string;
}

const HeroSection = () => {
  const cards: CardData[] = [
    { 
      name: "Snapchat", 
      subName: "PLUS",
      gradient: "from-[#FFFC00] to-[#FFE500]", 
      price: "Premium",
      position: "top-0 left-2 sm:left-8 md:left-16",
      rotation: "-rotate-6",
      zIndex: 15,
      delay: 0.4,
      logoType: 'text',
      textSize: 'text-lg sm:text-xl'
    },
    { 
      name: "Telegram", 
      subName: "PREMIUM",
      gradient: "from-[#0088cc] to-[#0077b5]", 
      price: "VIP",
      position: "top-2 right-4 sm:right-12 md:right-20",
      rotation: "rotate-6",
      zIndex: 20,
      delay: 0.5,
      logoType: 'text',
      textSize: 'text-lg sm:text-xl'
    },
    { 
      name: "ChatGPT", 
      subName: "PLUS",
      gradient: "from-[#10a37f] to-[#0d8a6f]", 
      price: "$20",
      position: "top-20 sm:top-24 right-0 sm:right-4 md:right-8",
      rotation: "rotate-3",
      zIndex: 25,
      delay: 0.6,
      logoType: 'text',
      textSize: 'text-lg sm:text-xl'
    },
    { 
      name: "Netflix", 
      gradient: "from-[#E50914] to-[#B20710]", 
      price: "$15",
      position: "top-24 sm:top-28 left-4 sm:left-16 md:left-24",
      rotation: "-rotate-3",
      zIndex: 18,
      delay: 0.65,
      logoType: 'text',
      textSize: 'text-xl sm:text-2xl font-black'
    },
    { 
      name: "TikTok", 
      subName: "COINS",
      gradient: "from-[#000000] via-[#121212] to-[#000000]", 
      price: "1000",
      position: "top-44 sm:top-48 right-6 sm:right-16 md:right-28",
      rotation: "rotate-4",
      zIndex: 22,
      delay: 0.7,
      logoType: 'text',
      textSize: 'text-lg sm:text-xl'
    },
    { 
      name: "XBOX", 
      subName: "Game Pass",
      gradient: "from-[#107C10] to-[#0e6b0e]", 
      price: "$50",
      position: "top-48 sm:top-52 left-0 sm:left-8 md:left-12",
      rotation: "-rotate-4",
      zIndex: 28,
      delay: 0.75,
      logoType: 'text',
      textSize: 'text-xl sm:text-2xl font-black'
    },
    { 
      name: "FREE", 
      subName: "FIRE",
      gradient: "from-[#FF6B00] via-[#FF5500] to-[#E64A00]", 
      price: "💎 500",
      position: "bottom-20 sm:bottom-24 right-2 sm:right-8 md:right-16",
      rotation: "rotate-2",
      zIndex: 16,
      delay: 0.8,
      logoType: 'text',
      textSize: 'text-lg sm:text-xl'
    },
    { 
      name: "توثيق", 
      subName: "فيسبوك وانستا",
      gradient: "from-[#1877F2] via-[#0866FF] to-[#5B51D8]", 
      price: "✓",
      position: "bottom-12 sm:bottom-16 left-4 sm:left-12 md:left-20",
      rotation: "-rotate-2",
      zIndex: 24,
      delay: 0.85,
      logoType: 'text',
      textSize: 'text-base sm:text-lg'
    },
    { 
      name: "PUBG", 
      subName: "UC",
      gradient: "from-[#F2A900] via-[#E59C00] to-[#CC8A00]", 
      price: "660",
      position: "bottom-0 sm:bottom-4 left-1/2 -translate-x-1/2",
      rotation: "rotate-1",
      zIndex: 30,
      delay: 0.9,
      logoType: 'text',
      textSize: 'text-xl sm:text-2xl font-black'
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 gradient-overlay pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-slate-500/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-64 lg:w-80 h-40 sm:h-64 lg:h-80 bg-slate-400/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '-1.5s' }} />

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-foreground tracking-wider mb-4 sm:mb-6 lg:mb-8 animate-fade-in-up">
          GIFT CARDS
        </h1>

        {/* Features */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-8 mb-8 sm:mb-10">
          <div className="flex items-center gap-2 text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-sm sm:text-base lg:text-lg">تنوع كبير في البطاقات</span>
            <Infinity className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex items-center gap-2 text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <span className="text-sm sm:text-base lg:text-lg">خيارات دفع متعددة وآمنة</span>
            <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        {/* Scattered Cards Container */}
        <div className="relative h-[400px] sm:h-[450px] md:h-[500px] mb-8 sm:mb-10">
          {cards.map((card) => (
            <div 
              key={card.name}
              className={`absolute ${card.position} ${card.rotation} floating-card animate-scale-in group cursor-pointer transition-all duration-300 hover:scale-110 hover:z-50`}
              style={{ 
                animationDelay: `${card.delay}s`,
                zIndex: card.zIndex
              }}
            >
              {/* Gift Card Design */}
              <div className={`w-32 h-20 sm:w-40 sm:h-24 md:w-44 md:h-28 rounded-xl bg-gradient-to-br ${card.gradient} overflow-hidden relative`}
                style={{
                  boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5), 0 4px 20px -5px rgba(0,0,0,0.3)'
                }}
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-50" />
                
                {/* Price Badge */}
                {card.price && (
                  <div className="absolute top-2 right-2 bg-black/30 backdrop-blur-sm rounded-full px-2 py-0.5 border border-white/20">
                    <span className="text-[10px] sm:text-xs font-bold text-white">{card.price}</span>
                  </div>
                )}
                
                {/* Card Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                  <span className={`${card.textSize || 'text-lg sm:text-xl'} font-bold text-white drop-shadow-lg leading-tight`}>
                    {card.name}
                  </span>
                  {card.subName && (
                    <span className="text-[9px] sm:text-[10px] text-white/90 font-medium tracking-wider mt-0.5">
                      {card.subName}
                    </span>
                  )}
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
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
