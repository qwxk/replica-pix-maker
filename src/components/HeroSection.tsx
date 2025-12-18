import { Infinity, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

// Brand Icons as SVG components
const SnapchatIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor">
    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const MetaVerifiedIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const FacebookAdsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const ChatGPTIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
  </svg>
);

const NetflixIcon = () => (
  <span className="text-2xl sm:text-3xl font-black text-white">N</span>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const XboxIcon = () => (
  <span className="text-2xl sm:text-3xl font-black text-white">XBOX</span>
);

const FreeFireIcon = () => (
  <span className="text-lg sm:text-xl font-black text-white">FREE FIRE</span>
);

interface CardData {
  name: string;
  nameAr: string;
  gradient: string;
  Icon: React.FC;
  price?: string;
  position: string;
  rotation: string;
  zIndex: number;
  delay: number;
}

const HeroSection = () => {
  const cards: CardData[] = [
    { 
      name: "Snapchat+", 
      nameAr: "سناب شات بلس", 
      gradient: "from-yellow-400 via-yellow-500 to-yellow-600", 
      Icon: SnapchatIcon,
      position: "top-0 left-0 sm:left-4",
      rotation: "-rotate-6",
      zIndex: 10,
      delay: 0.4
    },
    { 
      name: "Telegram", 
      nameAr: "تيليجرام مميز", 
      gradient: "from-sky-400 via-sky-500 to-sky-600", 
      Icon: TelegramIcon,
      price: "Premium",
      position: "top-4 right-0 sm:right-8",
      rotation: "rotate-3",
      zIndex: 20,
      delay: 0.5
    },
    { 
      name: "توثيق", 
      nameAr: "فيسبوك وانستا", 
      gradient: "from-blue-500 via-blue-600 to-purple-600", 
      Icon: MetaVerifiedIcon,
      position: "top-20 sm:top-24 right-4 sm:right-0",
      rotation: "rotate-6",
      zIndex: 15,
      delay: 0.6
    },
    { 
      name: "ChatGPT+", 
      nameAr: "شات جي بي تي", 
      gradient: "from-emerald-500 via-teal-500 to-teal-600", 
      Icon: ChatGPTIcon,
      price: "Plus",
      position: "top-28 sm:top-32 left-2 sm:left-8",
      rotation: "-rotate-3",
      zIndex: 25,
      delay: 0.7
    },
    { 
      name: "Netflix", 
      nameAr: "نتفلكس", 
      gradient: "from-red-600 via-red-700 to-red-800", 
      Icon: NetflixIcon,
      position: "top-44 sm:top-48 right-8 sm:right-16",
      rotation: "rotate-2",
      zIndex: 18,
      delay: 0.8
    },
    { 
      name: "TikTok", 
      nameAr: "عملات تيك توك", 
      gradient: "from-gray-900 via-black to-gray-800", 
      Icon: TikTokIcon,
      position: "top-52 sm:top-56 left-6 sm:left-20",
      rotation: "rotate-6",
      zIndex: 12,
      delay: 0.85
    },
    { 
      name: "XBOX", 
      nameAr: "اشتراك إكس بوكس", 
      gradient: "from-green-500 via-green-600 to-green-700", 
      Icon: XboxIcon,
      price: "Game Pass",
      position: "bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2",
      rotation: "-rotate-2",
      zIndex: 30,
      delay: 0.9
    },
    { 
      name: "Free Fire", 
      nameAr: "جواهر فري فاير", 
      gradient: "from-orange-500 via-orange-600 to-red-600", 
      Icon: FreeFireIcon,
      position: "bottom-20 sm:bottom-28 right-2 sm:right-4",
      rotation: "rotate-4",
      zIndex: 22,
      delay: 0.95
    },
    { 
      name: "FB Ads", 
      nameAr: "اعلانات ممولة", 
      gradient: "from-blue-600 via-blue-700 to-blue-800", 
      Icon: FacebookAdsIcon,
      position: "bottom-28 sm:bottom-36 left-0 sm:left-2",
      rotation: "-rotate-4",
      zIndex: 16,
      delay: 1
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
        <div className="relative h-[420px] sm:h-[480px] md:h-[520px] mb-8 sm:mb-10">
          {cards.map((card) => (
            <div 
              key={card.name}
              className={`absolute ${card.position} ${card.rotation} floating-card animate-scale-in group cursor-pointer transition-all duration-300 hover:scale-110 hover:z-50`}
              style={{ 
                animationDelay: `${card.delay}s`,
                zIndex: card.zIndex
              }}
            >
              <div className={`w-28 h-20 sm:w-36 sm:h-24 md:w-40 md:h-28 rounded-xl bg-gradient-to-br ${card.gradient} overflow-hidden relative shadow-2xl`}>
                {/* Price Badge */}
                {card.price && (
                  <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 bg-white/25 backdrop-blur-sm rounded-full px-2 py-0.5">
                    <span className="text-[9px] sm:text-[10px] font-bold text-white">{card.price}</span>
                  </div>
                )}
                
                {/* Content */}
                <div className="flex flex-col items-center justify-center h-full px-2">
                  <div className="text-white mb-1">
                    <card.Icon />
                  </div>
                  <p className="text-[8px] sm:text-[9px] text-white/80 text-center leading-tight">{card.nameAr}</p>
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
