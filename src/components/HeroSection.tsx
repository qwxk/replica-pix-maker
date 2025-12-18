import { Infinity, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Brand SVG Icons
const SnapchatLogo = () => (
  <svg viewBox="0 0 512 512" className="w-12 h-12 sm:w-14 sm:h-14">
    <path fill="#000" d="M256.5 16.7c47.7 0 83.4 14.3 106.2 42.5 18.2 22.5 27.1 54.3 27.1 97.2 0 15.8-1.4 32.8-4.1 50.6-.6 3.7-1.2 7.2-1.7 10.3 3.5 1.6 7.3 2.5 11.5 2.5 8.8 0 18.6-3.2 28.3-8.1 4.2-2.1 8.5-3.2 12.6-3.2 6.3 0 11.9 2.3 16.3 6.5 7.7 7.3 9.1 17.2 3.6 25.9-4.9 7.8-13.6 13.8-25.2 17.5-3.3 1.1-6.9 2.1-10.7 3.2-12.7 3.6-28.6 8.1-33.3 18.5-2.4 5.3-1.5 11.9 2.8 20.2l.5 1c14.3 27.2 33.6 50.3 57.4 68.6 14.4 11.1 31.5 20.4 50.8 27.6 7.8 2.9 12.6 8.9 13.3 16.3.7 8-3.2 15.8-10.7 21.2-14.7 10.6-38.6 18.2-73.2 23.4-1.4 3.1-2.9 8.5-4.1 12.8-1.5 5.3-3 10.8-5 16.1-2.9 7.7-8.1 11.5-15.8 11.5h-.9c-4.1-.1-8.5-.7-13.6-1.5-7.1-1.1-15.1-2.4-24.5-2.4-7.2 0-14.2.7-20.9 2-11.7 2.3-22 7.7-33.4 13.6-15.3 7.9-32.6 16.9-56.4 16.9h-1.3c-23.8 0-41.2-9-56.5-16.9-11.4-5.9-21.7-11.3-33.4-13.6-6.7-1.4-13.7-2-20.9-2-9.5 0-17.5 1.3-24.6 2.4-5 .8-9.5 1.5-13.5 1.5h-.9c-7.8 0-12.9-3.8-15.8-11.5-2-5.3-3.5-10.8-5-16.1-1.2-4.3-2.7-9.7-4.1-12.8-34.6-5.1-58.5-12.8-73.2-23.4-7.5-5.4-11.4-13.2-10.7-21.2.7-7.5 5.5-13.5 13.3-16.3 19.3-7.2 36.4-16.5 50.8-27.6 23.8-18.4 43.1-41.4 57.4-68.6l.5-1c4.3-8.3 5.2-14.9 2.8-20.2-4.7-10.4-20.6-14.9-33.3-18.5-3.8-1.1-7.4-2.1-10.7-3.2-11.6-3.7-20.3-9.7-25.2-17.5-5.5-8.7-4.1-18.6 3.6-25.9 4.4-4.2 10-6.5 16.3-6.5 4.1 0 8.4 1.1 12.6 3.2 9.7 4.9 19.5 8.1 28.3 8.1 4.2 0 8-.8 11.5-2.5-.5-3.1-1.1-6.6-1.7-10.3-2.7-17.8-4.1-34.8-4.1-50.6 0-42.9 8.9-74.7 27.1-97.2 22.8-28.2 58.5-42.5 106.2-42.5z"/>
  </svg>
);

const TelegramLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12" fill="white">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const ChatGPTLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12" fill="white">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
  </svg>
);

const NetflixLogo = () => (
  <svg viewBox="0 0 111 30" className="w-16 h-10 sm:w-20 sm:h-12" fill="#E50914">
    <path d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687H35.5V0h13.406v4.687h-3.562zM23.25 0v4.687h-6.406v20.688c-1.5.062-3.062.187-4.563.312V4.687H5.875V0h17.375zm-21.22 5.438C.88 5.876 0 7.378 0 8.814v10.469c0 1.405.719 2.75 1.875 3.312 1.407.687 2.938.406 4.407.218V18.5l-2.594.25V9.063l2.594.25V5.094c-1.469-.188-2.969-.344-4.25.344z" fill="white"/>
  </svg>
);

const TikTokLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12" fill="white">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const XboxLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12" fill="white">
    <path d="M4.102 21.033A11.947 11.947 0 0 0 12 24a11.96 11.96 0 0 0 7.902-2.967c1.877-1.912-4.316-8.709-7.902-11.417-3.582 2.708-9.779 9.505-7.898 11.417zm11.16-14.406c2.5 2.961 7.484 10.313 6.076 12.912A11.942 11.942 0 0 0 24 12.004a11.95 11.95 0 0 0-3.57-8.536s-.027-.022-.082-.042a.824.824 0 0 0-.281-.045c-.592 0-1.985.434-4.805 3.246zM3.654 3.426c-.057.02-.082.041-.086.042A11.956 11.956 0 0 0 0 12.004c0 2.854.998 5.473 2.661 7.533-1.401-2.605 3.579-9.951 6.08-12.91-2.82-2.812-4.213-3.246-4.806-3.246a.725.725 0 0 0-.281.045zM12 3.551S9.055 1.828 6.755 1.746c-.903-.033-1.454.295-1.521.339C7.379.646 9.659 0 11.984 0H12c2.334 0 4.605.646 6.766 2.085-.066-.046-.615-.372-1.52-.339C14.946 1.828 12 3.545 12 3.551z"/>
  </svg>
);

const PUBGLogo = () => (
  <div className="flex flex-col items-center">
    <span className="text-2xl sm:text-3xl font-black text-white tracking-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>PUBG</span>
    <span className="text-[10px] sm:text-xs text-yellow-100 font-semibold -mt-1">MOBILE</span>
  </div>
);

const FreeFireLogo = () => (
  <div className="flex flex-col items-center">
    <span className="text-lg sm:text-xl font-black text-white tracking-tight">FREE</span>
    <span className="text-lg sm:text-xl font-black text-orange-100 -mt-1">FIRE</span>
  </div>
);

const MetaVerifyLogo = () => (
  <div className="flex items-center gap-1">
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8" fill="white">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
    <span className="text-base sm:text-lg font-bold text-white">توثيق</span>
  </div>
);

interface CardData {
  id: string;
  Logo: React.FC;
  gradient: string;
  price?: string;
  shadowColor: string;
}

const GiftCard = ({ card, index }: { card: CardData; index: number }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (y - 0.5) * 20,
      y: (x - 0.5) * -20
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div 
      className="animate-scale-in cursor-pointer"
      style={{ 
        animationDelay: `${0.2 + index * 0.1}s`,
        perspective: '1000px'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={`relative w-36 h-24 sm:w-44 sm:h-28 md:w-48 md:h-32 rounded-2xl bg-gradient-to-br ${card.gradient} overflow-hidden transition-all duration-200`}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isHovered ? 'scale(1.08)' : 'scale(1)'}`,
          transformStyle: 'preserve-3d',
          boxShadow: isHovered 
            ? `0 25px 50px -12px ${card.shadowColor}, 0 0 30px ${card.shadowColor}`
            : `0 10px 30px -10px rgba(0,0,0,0.4)`
        }}
      >
        {/* Glossy overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60"
          style={{ transform: 'translateZ(1px)' }}
        />
        
        {/* Shine effect on hover */}
        <div 
          className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            transform: `translateX(${tilt.y * 5}px) translateY(${tilt.x * 5}px) translateZ(2px)` 
          }}
        />
        
        {/* Price badge */}
        {card.price && (
          <div 
            className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-black/40 backdrop-blur-md rounded-full px-2.5 py-1 border border-white/30"
            style={{ transform: 'translateZ(20px)' }}
          >
            <span className="text-[10px] sm:text-xs font-bold text-white">{card.price}</span>
          </div>
        )}
        
        {/* Logo */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: 'translateZ(15px)' }}
        >
          <card.Logo />
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
    </div>
  );
};

const HeroSection = () => {
  const cards: CardData[] = [
    { id: "snapchat", Logo: SnapchatLogo, gradient: "from-[#FFFC00] via-[#FFE500] to-[#FFC800]", price: "Plus", shadowColor: "rgba(255,252,0,0.4)" },
    { id: "telegram", Logo: TelegramLogo, gradient: "from-[#2AABEE] via-[#229ED9] to-[#1E96C8]", price: "Premium", shadowColor: "rgba(42,171,238,0.4)" },
    { id: "chatgpt", Logo: ChatGPTLogo, gradient: "from-[#10A37F] via-[#0D9373] to-[#0A7D62]", price: "$20", shadowColor: "rgba(16,163,127,0.4)" },
    { id: "netflix", Logo: NetflixLogo, gradient: "from-[#E50914] via-[#C4070F] to-[#8B0A0A]", price: "$15", shadowColor: "rgba(229,9,20,0.4)" },
    { id: "tiktok", Logo: TikTokLogo, gradient: "from-[#010101] via-[#161823] to-[#000000]", price: "Coins", shadowColor: "rgba(0,0,0,0.6)" },
    { id: "xbox", Logo: XboxLogo, gradient: "from-[#107C10] via-[#0E6B0E] to-[#0A5A0A]", price: "$50", shadowColor: "rgba(16,124,16,0.4)" },
    { id: "pubg", Logo: PUBGLogo, gradient: "from-[#F2A900] via-[#E09600] to-[#C77E00]", price: "660 UC", shadowColor: "rgba(242,169,0,0.4)" },
    { id: "freefire", Logo: FreeFireLogo, gradient: "from-[#FF6B00] via-[#FF4500] to-[#CC3700]", price: "💎 500", shadowColor: "rgba(255,107,0,0.4)" },
    { id: "verify", Logo: MetaVerifyLogo, gradient: "from-[#1877F2] via-[#0866FF] to-[#5B51D8]", price: "✓", shadowColor: "rgba(24,119,242,0.4)" },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 gradient-overlay pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-slate-500/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-64 lg:w-80 h-40 sm:h-64 lg:h-80 bg-slate-400/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '-1.5s' }} />

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

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center mb-10 sm:mb-12">
          {cards.map((card, index) => (
            <GiftCard key={card.id} card={card} index={index} />
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
