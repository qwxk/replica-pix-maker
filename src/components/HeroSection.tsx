import { Infinity, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

// Brand Icons as SVG components
const SnapchatIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const MetaVerifiedIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const FacebookAdsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const ChatGPTIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
  </svg>
);

const NetflixIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.913.002-22.95zM5.398 1.05V24c1.873-.225 2.81-.312 4.715-.398v-9.22z"/>
  </svg>
);

const PUBGIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6c4.636 0 8.4 3.764 8.4 8.4 0 4.636-3.764 8.4-8.4 8.4-4.636 0-8.4-3.764-8.4-8.4 0-4.636 3.764-8.4 8.4-8.4zm-2.4 3.6v9.6h2.4V12h2.4c1.325 0 2.4-1.075 2.4-2.4 0-1.325-1.075-2.4-2.4-2.4h-4.8zm2.4 2.4h2.4v2.4h-2.4V9.6z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const XboxIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M4.102 21.033A11.947 11.947 0 0 0 12 24a11.96 11.96 0 0 0 7.902-2.967c1.877-1.912-4.316-8.709-7.902-11.417-3.582 2.708-9.779 9.505-7.898 11.417zm11.16-14.406c2.5 2.961 7.484 10.313 6.076 12.912A11.942 11.942 0 0 0 24 12.004a11.95 11.95 0 0 0-3.57-8.536s-.027-.022-.082-.042a.824.824 0 0 0-.281-.045c-.592 0-1.985.434-4.805 3.246zM3.654 3.426c-.057.02-.082.041-.086.042A11.956 11.956 0 0 0 0 12.004c0 2.854.998 5.473 2.661 7.533-1.401-2.605 3.579-9.951 6.08-12.91-2.82-2.812-4.213-3.246-4.806-3.246a.725.725 0 0 0-.281.045zM12 3.551S9.055 1.828 6.755 1.746c-.903-.033-1.454.295-1.521.339C7.379.646 9.659 0 11.984 0H12c2.334 0 4.605.646 6.766 2.085-.066-.046-.615-.372-1.52-.339C14.946 1.828 12 3.545 12 3.551z"/>
  </svg>
);

const FreeFireIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 0L2 6v12l10 6 10-6V6L12 0zm0 2.18l7.5 4.5v9l-7.5 4.5-7.5-4.5v-9l7.5-4.5zm-3 5.82v8l3 1.8 3-1.8v-8l-3-1.8-3 1.8zm3 1.2l1.5.9v4.8l-1.5.9-1.5-.9V10.1l1.5-.9z"/>
  </svg>
);

const HeroSection = () => {
  const cards = [
    { name: "Snapchat+", nameAr: "سناب شات بلس", iconBg: "bg-yellow-400", cardBg: "bg-gradient-to-br from-slate-700/80 to-slate-800/90", iconColor: "text-slate-900", Icon: SnapchatIcon },
    { name: "Telegram", nameAr: "تيليجرام مميز", iconBg: "bg-sky-500", cardBg: "bg-gradient-to-br from-slate-700/80 to-slate-800/90", iconColor: "text-white", Icon: TelegramIcon },
    { name: "توثيق", nameAr: "فيسبوك وانستا", iconBg: "bg-blue-500", cardBg: "bg-gradient-to-br from-slate-700/80 to-slate-800/90", iconColor: "text-white", Icon: MetaVerifiedIcon },
    { name: "FB Ads", nameAr: "اعلانات ممولة", iconBg: "bg-blue-600", cardBg: "bg-gradient-to-br from-slate-700/80 to-slate-800/90", iconColor: "text-white", Icon: FacebookAdsIcon },
    { name: "ChatGPT+", nameAr: "شات جي بي تي", iconBg: "bg-emerald-500", cardBg: "bg-gradient-to-br from-slate-700/80 to-slate-800/90", iconColor: "text-white", Icon: ChatGPTIcon },
    { name: "Netflix", nameAr: "نتفلكس", iconBg: "bg-red-600", cardBg: "bg-gradient-to-br from-slate-700/80 to-slate-800/90", iconColor: "text-white", Icon: NetflixIcon },
    { name: "PUBG UC", nameAr: "شدات ببجي", iconBg: "bg-orange-500", cardBg: "bg-gradient-to-br from-slate-700/80 to-slate-800/90", iconColor: "text-white", Icon: PUBGIcon },
    { name: "TikTok", nameAr: "عملات تيك توك", iconBg: "bg-black", cardBg: "bg-gradient-to-br from-slate-700/80 to-slate-800/90", iconColor: "text-white", Icon: TikTokIcon },
    { name: "Xbox", nameAr: "اشتراك إكس بوكس", iconBg: "bg-green-500", cardBg: "bg-gradient-to-br from-slate-700/80 to-slate-800/90", iconColor: "text-white", Icon: XboxIcon },
    { name: "Free Fire", nameAr: "جواهر فري فاير", iconBg: "bg-orange-600", cardBg: "bg-gradient-to-br from-slate-700/80 to-slate-800/90", iconColor: "text-white", Icon: FreeFireIcon },
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

        {/* Gift Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 mb-8 sm:mb-10 lg:mb-12 px-2">
          {cards.map((card, index) => (
            <div 
              key={card.name}
              className="animate-scale-in group cursor-pointer"
              style={{ animationDelay: `${0.3 + index * 0.08}s` }}
            >
              <div className={`w-full ${card.cardBg} backdrop-blur-sm border border-slate-600/30 rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:border-slate-500/50 group-hover:shadow-xl group-hover:shadow-slate-900/50`}>
                {/* Card Content */}
                <div className="p-4 sm:p-5 flex flex-col items-center">
                  {/* Icon Circle */}
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 ${card.iconBg} rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110 ${card.iconColor}`}>
                    <card.Icon />
                  </div>
                  
                  {/* Text */}
                  <h3 className="text-sm sm:text-base font-bold text-foreground mb-1">{card.name}</h3>
                  <p className="text-[10px] sm:text-xs text-muted-foreground text-center">{card.nameAr}</p>
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
