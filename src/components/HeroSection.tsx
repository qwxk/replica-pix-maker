import { CheckCircle, CreditCard, HelpCircle } from "lucide-react";
import { useState } from "react";
import madarLogo from "@/assets/madar-logo.svg";

// Real Brand SVG Logos
const SnapchatLogo = () => (
  <svg viewBox="0 0 512 512" className="w-14 h-14 sm:w-16 sm:h-16">
    <path fill="#000" d="M256.5 16.7c47.7 0 83.4 14.3 106.2 42.5 18.2 22.5 27.1 54.3 27.1 97.2 0 15.8-1.4 32.8-4.1 50.6-.6 3.7-1.2 7.2-1.7 10.3 3.5 1.6 7.3 2.5 11.5 2.5 8.8 0 18.6-3.2 28.3-8.1 4.2-2.1 8.5-3.2 12.6-3.2 6.3 0 11.9 2.3 16.3 6.5 7.7 7.3 9.1 17.2 3.6 25.9-4.9 7.8-13.6 13.8-25.2 17.5-3.3 1.1-6.9 2.1-10.7 3.2-12.7 3.6-28.6 8.1-33.3 18.5-2.4 5.3-1.5 11.9 2.8 20.2l.5 1c14.3 27.2 33.6 50.3 57.4 68.6 14.4 11.1 31.5 20.4 50.8 27.6 7.8 2.9 12.6 8.9 13.3 16.3.7 8-3.2 15.8-10.7 21.2-14.7 10.6-38.6 18.2-73.2 23.4-1.4 3.1-2.9 8.5-4.1 12.8-1.5 5.3-3 10.8-5 16.1-2.9 7.7-8.1 11.5-15.8 11.5h-.9c-4.1-.1-8.5-.7-13.6-1.5-7.1-1.1-15.1-2.4-24.5-2.4-7.2 0-14.2.7-20.9 2-11.7 2.3-22 7.7-33.4 13.6-15.3 7.9-32.6 16.9-56.4 16.9h-1.3c-23.8 0-41.2-9-56.5-16.9-11.4-5.9-21.7-11.3-33.4-13.6-6.7-1.4-13.7-2-20.9-2-9.5 0-17.5 1.3-24.6 2.4-5 .8-9.5 1.5-13.5 1.5h-.9c-7.8 0-12.9-3.8-15.8-11.5-2-5.3-3.5-10.8-5-16.1-1.2-4.3-2.7-9.7-4.1-12.8-34.6-5.1-58.5-12.8-73.2-23.4-7.5-5.4-11.4-13.2-10.7-21.2.7-7.5 5.5-13.5 13.3-16.3 19.3-7.2 36.4-16.5 50.8-27.6 23.8-18.4 43.1-41.4 57.4-68.6l.5-1c4.3-8.3 5.2-14.9 2.8-20.2-4.7-10.4-20.6-14.9-33.3-18.5-3.8-1.1-7.4-2.1-10.7-3.2-11.6-3.7-20.3-9.7-25.2-17.5-5.5-8.7-4.1-18.6 3.6-25.9 4.4-4.2 10-6.5 16.3-6.5 4.1 0 8.4 1.1 12.6 3.2 9.7 4.9 19.5 8.1 28.3 8.1 4.2 0 8-.8 11.5-2.5-.5-3.1-1.1-6.6-1.7-10.3-2.7-17.8-4.1-34.8-4.1-50.6 0-42.9 8.9-74.7 27.1-97.2 22.8-28.2 58.5-42.5 106.2-42.5z"/>
  </svg>
);

const TelegramLogo = () => (
  <svg viewBox="0 0 48 48" className="w-14 h-14 sm:w-16 sm:h-16">
    <path fill="#fff" d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm9.76 13.71-3.29 15.52c-.25 1.1-.9 1.37-1.83.85l-5.05-3.72-2.44 2.34c-.27.27-.5.5-.99.5l.36-5.14 9.33-8.43c.41-.36-.09-.56-.63-.2l-11.53 7.27-4.97-1.55c-1.08-.34-1.1-1.08.23-1.6l19.44-7.49c.9-.33 1.69.22 1.37 1.65z"/>
  </svg>
);

const ChatGPTLogo = () => (
  <svg viewBox="0 0 24 24" className="w-14 h-14 sm:w-16 sm:h-16" fill="white">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
  </svg>
);

const NetflixLogo = () => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png" 
    alt="Netflix" 
    className="w-24 h-14 sm:w-32 sm:h-18 object-contain drop-shadow-lg brightness-0 invert"
  />
);

const TikTokLogo = () => (
  <svg viewBox="0 0 48 48" className="w-14 h-14 sm:w-16 sm:h-16">
    <path fill="#fff" d="M34.145 12.745c-2.09-1.34-3.536-3.545-3.888-6.085-.065-.475-.1-.96-.1-1.46h-6.067l-.01 27.3c-.08 2.86-2.44 5.16-5.335 5.16-1.015 0-1.965-.28-2.775-.77-1.61-.98-2.685-2.76-2.685-4.79 0-3.09 2.515-5.6 5.605-5.6.58 0 1.135.09 1.66.255v-6.19c-.545-.075-1.1-.12-1.66-.12-6.455 0-11.695 5.24-11.695 11.695 0 3.935 1.945 7.415 4.925 9.535 1.87 1.33 4.155 2.115 6.625 2.115 6.455 0 11.695-5.24 11.695-11.695V21.23c2.48 1.78 5.52 2.83 8.795 2.83v-6.07c-1.765 0-3.42-.455-4.855-1.255l-.235-.01z"/>
  </svg>
);

const XboxLogo = () => (
  <svg viewBox="0 0 24 24" className="w-14 h-14 sm:w-16 sm:h-16" fill="white">
    <path d="M4.102 21.033A11.947 11.947 0 0 0 12 24a11.96 11.96 0 0 0 7.902-2.967c1.877-1.912-4.316-8.709-7.902-11.417-3.582 2.708-9.779 9.505-7.898 11.417zm11.16-14.406c2.5 2.961 7.484 10.313 6.076 12.912A11.942 11.942 0 0 0 24 12.004a11.95 11.95 0 0 0-3.57-8.536s-.027-.022-.082-.042a.824.824 0 0 0-.281-.045c-.592 0-1.985.434-4.805 3.246zM3.654 3.426c-.057.02-.082.041-.086.042A11.956 11.956 0 0 0 0 12.004c0 2.854.998 5.473 2.661 7.533-1.401-2.605 3.579-9.951 6.08-12.91-2.82-2.812-4.213-3.246-4.806-3.246a.725.725 0 0 0-.281.045zM12 3.551S9.055 1.828 6.755 1.746c-.903-.033-1.454.295-1.521.339C7.379.646 9.659 0 11.984 0H12c2.334 0 4.605.646 6.766 2.085-.066-.046-.615-.372-1.52-.339C14.946 1.828 12 3.545 12 3.551z"/>
  </svg>
);

const PUBGLogo = () => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/PUBG_Corporation_Logo.svg/1024px-PUBG_Corporation_Logo.svg.png" 
    alt="PUBG" 
    className="w-24 h-14 sm:w-32 sm:h-18 object-contain drop-shadow-lg brightness-0 invert"
  />
);

const FreeFireLogo = () => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Free_Fire_New_Logo.svg/330px-Free_Fire_New_Logo.svg.png" 
    alt="Free Fire" 
    className="w-24 h-14 sm:w-32 sm:h-18 object-contain drop-shadow-lg brightness-0 invert"
  />
);

const MetaVerifyLogo = () => (
  <div className="flex flex-col items-center gap-1">
    <div className="flex items-center gap-1">
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="white">
        <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
      </svg>
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
        <defs>
          <linearGradient id="instaGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFDC80"/>
            <stop offset="25%" stopColor="#FCAF45"/>
            <stop offset="50%" stopColor="#F77737"/>
            <stop offset="75%" stopColor="#F56040"/>
            <stop offset="100%" stopColor="#C13584"/>
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#instaGrad)"/>
        <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="2"/>
        <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
      </svg>
    </div>
    <div className="flex items-center gap-0.5">
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#1DA1F2">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
      </svg>
      <span className="text-xs text-white font-bold">VERIFIED</span>
    </div>
  </div>
);

const FacebookAdsLogo = () => (
  <div className="flex flex-col items-center gap-1">
    <svg viewBox="0 0 24 24" className="w-12 h-12 sm:w-14 sm:h-14" fill="white">
      <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
    </svg>
    <span className="text-xs sm:text-sm font-bold text-white">ADS</span>
  </div>
);

interface CardData {
  id: string;
  name: string;
  nameAr: string;
  Logo: React.FC;
  gradient: string;
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
      x: (y - 0.5) * 15,
      y: (x - 0.5) * -15
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
        animationDelay: `${0.1 + index * 0.04}s`,
        perspective: '1000px'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={`relative w-full aspect-[3/4] rounded-2xl bg-gradient-to-br ${card.gradient} overflow-hidden transition-all duration-300`}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isHovered ? 'scale(1.05)' : 'scale(1)'}`,
          transformStyle: 'preserve-3d',
          boxShadow: isHovered 
            ? `0 20px 40px -12px ${card.shadowColor}, 0 0 25px ${card.shadowColor}`
            : `0 14px 26px -12px rgba(0,0,0,0.4), 0 4px 23px 0 rgba(0,0,0,0.12)`
        }}
      >
        {/* Material glossy overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-black/10 pointer-events-none"
          style={{ transform: 'translateZ(1px)' }}
        />
        
        {/* Shine effect on hover */}
        <div 
          className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            transform: `translateX(${tilt.y * 3}px) translateY(${tilt.x * 3}px) translateZ(2px)` 
          }}
        />

        {/* Logo */}
        <div className="flex-1 flex items-center justify-center pt-4 sm:pt-6 md:pt-8">
          <div className="scale-[0.6] sm:scale-[0.7] md:scale-[0.8] lg:scale-[0.9] xl:scale-100">
            <card.Logo />
          </div>
        </div>
        
        {/* Card info */}
        <div className="p-3 sm:p-4 md:p-5 text-center">
          <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white leading-tight mb-0.5">{card.name}</h3>
          <p className="text-[10px] sm:text-xs md:text-sm text-white/75 leading-tight">{card.nameAr}</p>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const cards: CardData[] = [
    { id: "snapchat", name: "Snapchat+", nameAr: "سناب شات بلس", Logo: SnapchatLogo, gradient: "from-[#FFFC00] via-[#FFE500] to-[#FFC800]", shadowColor: "rgba(255,252,0,0.35)" },
    { id: "telegram", name: "Telegram Premium", nameAr: "تيليجرام مميز", Logo: TelegramLogo, gradient: "from-[#2AABEE] via-[#229ED9] to-[#1E96C8]", shadowColor: "rgba(42,171,238,0.35)" },
    { id: "chatgpt", name: "ChatGPT Plus", nameAr: "شات جي بي تي بلس", Logo: ChatGPTLogo, gradient: "from-[#10A37F] via-[#0D9373] to-[#0A7D62]", shadowColor: "rgba(16,163,127,0.35)" },
    { id: "netflix", name: "Netflix", nameAr: "نتفلكس", Logo: NetflixLogo, gradient: "from-[#E50914] via-[#C4070F] to-[#8B0A0A]", shadowColor: "rgba(229,9,20,0.35)" },
    { id: "tiktok", name: "TikTok Coins", nameAr: "عملات تيك توك", Logo: TikTokLogo, gradient: "from-[#010101] via-[#161823] to-[#000000]", shadowColor: "rgba(0,0,0,0.5)" },
    { id: "xbox", name: "Xbox Game Pass", nameAr: "اشتراك إكس بوكس", Logo: XboxLogo, gradient: "from-[#107C10] via-[#0E6B0E] to-[#0A5A0A]", shadowColor: "rgba(16,124,16,0.35)" },
    { id: "pubg", name: "PUBG UC", nameAr: "شدات ببجي", Logo: PUBGLogo, gradient: "from-[#F2A900] via-[#E09600] to-[#C77E00]", shadowColor: "rgba(242,169,0,0.35)" },
    { id: "freefire", name: "Free Fire", nameAr: "جواهر فري فاير", Logo: FreeFireLogo, gradient: "from-[#FF6B00] via-[#FF4500] to-[#CC3700]", shadowColor: "rgba(255,107,0,0.35)" },
    { id: "verify", name: "Meta Verified", nameAr: "توثيق فيسبوك وانستا", Logo: MetaVerifyLogo, gradient: "from-[#1877F2] via-[#0866FF] to-[#5B51D8]", shadowColor: "rgba(24,119,242,0.35)" },
    { id: "fbads", name: "Facebook Ads", nameAr: "اعلانات ممولة", Logo: FacebookAdsLogo, gradient: "from-[#1877F2] via-[#166FE5] to-[#0E5FCF]", shadowColor: "rgba(24,119,242,0.35)" },
  ];

  const paymentMethods = [
    { name: "لي باي", logo: "https://lypay.gov.ly/wp-content/uploads/2025/06/ly-pay-logo.svg" },
    { name: "ون باي", logo: "https://masarat.ly/ms_uploads/2025/10/OnePay-Full-Logo.svg" },
    { name: "كاش", logo: "https://png.pngtree.com/png-clipart/20221228/original/pngtree-5-libyan-dinar-stack-pile-png-image_8816158.png" },
    { name: "ليبيانا", logo: "https://images.seeklogo.com/logo-png/47/1/libyana-logo-png_seeklogo-478706.png" },
    { name: "مدار", logo: madarLogo },
  ];

  return (
    <section className="relative flex-1 flex flex-col items-center justify-center px-0 py-4 sm:py-6 overflow-hidden">
      {/* Material Dashboard Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="pattern-grid" />
      <div className="pattern-dots" />
      
      {/* Animated gradient orbs - Material style */}
      <div className="absolute top-1/4 left-1/4 w-80 sm:w-[500px] lg:w-[600px] h-80 sm:h-[500px] lg:h-[600px] bg-gradient-to-br from-primary/10 to-secondary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-[400px] lg:w-[500px] h-64 sm:h-[400px] lg:h-[500px] bg-gradient-to-br from-accent/10 to-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '-2s' }} />

      {/* Content */}
      <div className="relative z-10 text-center w-full flex flex-col items-center">
        {/* Title - Material Typography */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-foreground tracking-tight mb-3 sm:mb-4 lg:mb-6 animate-fade-in-up">
          الاشتراكات
        </h1>

        {/* Features - Material Chips */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/20 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <span className="text-xs sm:text-sm md:text-base text-foreground/90 font-medium">كل حاجه موجوده</span>
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg icon-material-primary flex items-center justify-center">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" />
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/20 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            <span className="text-xs sm:text-sm md:text-base text-foreground/90 font-medium">معندكش كاش؟ عادي ادفع خدمات</span>
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg icon-material-secondary flex items-center justify-center">
              <CreditCard className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* Cards Grid - Material Dashboard Layout */}
        <div className="w-full px-3 sm:px-6 md:px-10 lg:px-16 xl:px-24 mb-8 sm:mb-10 lg:mb-12">
          <div className="grid grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
            {cards.map((card, index) => (
              <GiftCard key={card.id} card={card} index={index} />
            ))}
          </div>
        </div>

        {/* Payment Methods Section - Material Card */}
        <div className="w-full max-w-3xl mb-6 sm:mb-8 lg:mb-10 px-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="material-card p-4 sm:p-6">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">ايش نقبلو؟</h2>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg icon-material-primary flex items-center justify-center">
                <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              {paymentMethods.map((method, index) => (
                <div 
                  key={method.name}
                  className="flex flex-col items-center gap-2 animate-scale-in"
                  style={{ animationDelay: `${0.9 + index * 0.05}s` }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-xl bg-background flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border border-border/10">
                    <img src={method.logo} alt={method.name} className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain" />
                  </div>
                  <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground font-medium">{method.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button - Material Button */}
        <a 
          href="https://wa.me/218928102731?text=مرحبا، أريد الاستفسار عن الاشتراكات"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-in-up"
          style={{ animationDelay: '1.1s' }}
        >
          <button className="btn-material-primary px-8 py-4 sm:px-10 sm:py-5 rounded-xl flex items-center gap-3 text-base sm:text-lg font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>تواصل معنا عبر واتساب</span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;