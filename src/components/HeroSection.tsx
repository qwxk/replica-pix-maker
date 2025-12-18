import { Infinity, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 gradient-overlay pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-muted/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-64 lg:w-80 h-40 sm:h-64 lg:h-80 bg-muted/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '-1.5s' }} />

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
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

        {/* Gift Cards Display - Mobile Grid */}
        <div className="grid grid-cols-2 sm:hidden gap-3 mb-8 px-2">
          {/* PUBG Card */}
          <div className="floating-card animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-full h-20 rounded-xl card-shadow bg-gradient-to-br from-yellow-600 via-yellow-500 to-orange-500 overflow-hidden relative">
              <div className="absolute top-1.5 right-1.5 bg-black/30 backdrop-blur-sm rounded-full px-1.5 py-0.5">
                <span className="text-[10px] font-bold text-white">660US</span>
              </div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <span className="text-xl font-black text-white tracking-tight">PUBG</span>
                  <p className="text-[8px] text-yellow-100 -mt-0.5">MOBILE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Play Card */}
          <div className="floating-card floating-card-delay-1 animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <div className="w-full h-20 rounded-xl card-shadow bg-gradient-to-br from-teal-500 to-teal-600 overflow-hidden relative">
              <div className="absolute top-1.5 right-1.5 bg-white/20 backdrop-blur-sm rounded-full px-1.5 py-0.5">
                <span className="text-[10px] font-bold text-white">$600</span>
              </div>
              <div className="flex items-center justify-center h-full">
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6">
                    <svg viewBox="0 0 48 48" className="w-full h-full">
                      <path fill="#4CAF50" d="M8,14V34l16-10L8,14z"/>
                      <path fill="#F44336" d="M8,14l16,10l8-5L8,6V14z"/>
                      <path fill="#2196F3" d="M24,24l8,5l8-5l-8-5L24,24z"/>
                      <path fill="#FFC107" d="M8,34l24,13v-18L24,24L8,34z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-white">Google Play</span>
                </div>
              </div>
            </div>
          </div>

          {/* PlayStation Card */}
          <div className="floating-card floating-card-delay-2 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="w-full h-20 rounded-xl card-shadow bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden relative flex items-center justify-center">
              <span className="text-2xl font-bold text-white">PS</span>
            </div>
          </div>

          {/* iTunes Card */}
          <div className="floating-card floating-card-delay-3 animate-scale-in" style={{ animationDelay: '0.7s' }}>
            <div className="w-full h-20 rounded-xl card-shadow bg-gradient-to-br from-pink-400 to-pink-500 overflow-hidden relative">
              <div className="absolute top-1.5 right-1.5 bg-white/20 backdrop-blur-sm rounded-full px-1.5 py-0.5">
                <span className="text-[10px] font-bold text-white">$30</span>
              </div>
              <div className="flex items-center justify-center h-full gap-1">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="text-sm font-bold text-white">iTunes</span>
              </div>
            </div>
          </div>

          {/* Steam Card */}
          <div className="floating-card animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <div className="w-full h-20 rounded-xl card-shadow bg-gradient-to-br from-slate-700 to-slate-900 overflow-hidden relative flex items-center justify-center">
              <span className="text-lg font-bold text-white">STEAM</span>
            </div>
          </div>

          {/* Xbox Card */}
          <div className="floating-card floating-card-delay-1 animate-scale-in" style={{ animationDelay: '0.9s' }}>
            <div className="w-full h-20 rounded-xl card-shadow bg-gradient-to-br from-green-500 to-green-700 overflow-hidden relative">
              <div className="absolute top-1.5 right-1.5 bg-white/20 backdrop-blur-sm rounded-full px-1.5 py-0.5">
                <span className="text-[10px] font-bold text-white">$50</span>
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                <span className="text-2xl font-black text-white">XBOX</span>
                <span className="text-[8px] text-green-100">Microsoft</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gift Cards Display - Desktop Scattered Layout */}
        <div className="hidden sm:block relative h-72 md:h-80 lg:h-96 mb-8 sm:mb-10 lg:mb-12">
          {/* PUBG Card */}
          <div className="absolute top-0 left-4 md:left-8 lg:left-12 floating-card animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-32 h-20 md:w-40 md:h-24 lg:w-44 lg:h-28 rounded-xl card-shadow bg-gradient-to-br from-yellow-600 via-yellow-500 to-orange-500 overflow-hidden relative">
              <div className="absolute top-2 right-2 bg-black/30 backdrop-blur-sm rounded-full px-2 py-0.5">
                <span className="text-xs font-bold text-white">660US</span>
              </div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <span className="text-xl md:text-2xl lg:text-3xl font-black text-white tracking-tight">PUBG</span>
                  <p className="text-[8px] md:text-[10px] text-yellow-100 -mt-1">MOBILE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Play Card */}
          <div className="absolute top-2 md:top-4 right-4 md:right-12 lg:right-20 floating-card floating-card-delay-1 animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <div className="w-28 h-18 md:w-36 md:h-22 lg:w-40 lg:h-24 rounded-xl card-shadow bg-gradient-to-br from-teal-500 to-teal-600 overflow-hidden relative">
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full px-2 py-0.5">
                <span className="text-xs font-bold text-white">$600</span>
              </div>
              <div className="flex items-center justify-center h-full">
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10">
                    <svg viewBox="0 0 48 48" className="w-full h-full">
                      <path fill="#4CAF50" d="M8,14V34l16-10L8,14z"/>
                      <path fill="#F44336" d="M8,14l16,10l8-5L8,6V14z"/>
                      <path fill="#2196F3" d="M24,24l8,5l8-5l-8-5L24,24z"/>
                      <path fill="#FFC107" d="M8,34l24,13v-18L24,24L8,34z"/>
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm lg:text-base font-bold text-white">Google Play</span>
                </div>
              </div>
            </div>
          </div>

          {/* PlayStation Card */}
          <div className="absolute top-20 md:top-24 right-0 md:right-4 lg:right-8 floating-card floating-card-delay-2 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="w-24 h-16 md:w-32 md:h-20 lg:w-36 lg:h-22 rounded-xl card-shadow bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden relative flex items-center justify-center">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">PS</span>
            </div>
          </div>

          {/* iTunes Card */}
          <div className="absolute top-28 md:top-32 left-4 md:left-16 lg:left-24 floating-card floating-card-delay-3 animate-scale-in" style={{ animationDelay: '0.7s' }}>
            <div className="w-28 h-18 md:w-36 md:h-22 lg:w-40 lg:h-24 rounded-xl card-shadow bg-gradient-to-br from-pink-400 to-pink-500 overflow-hidden relative">
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full px-2 py-0.5">
                <span className="text-xs font-bold text-white">$30</span>
              </div>
              <div className="flex items-center justify-center h-full gap-1 md:gap-2">
                <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="text-sm md:text-base lg:text-lg font-bold text-white">iTunes</span>
              </div>
            </div>
          </div>

          {/* Steam Card */}
          <div className="absolute top-40 md:top-44 right-12 md:right-24 lg:right-32 floating-card animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <div className="w-24 h-16 md:w-32 md:h-20 lg:w-36 lg:h-22 rounded-xl card-shadow bg-gradient-to-br from-slate-700 to-slate-900 overflow-hidden relative flex items-center justify-center">
              <span className="text-base md:text-xl lg:text-2xl font-bold text-white">STEAM</span>
            </div>
          </div>

          {/* Xbox Card */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 floating-card floating-card-delay-1 animate-scale-in" style={{ animationDelay: '0.9s' }}>
            <div className="w-32 h-20 md:w-40 md:h-24 lg:w-44 lg:h-28 rounded-xl card-shadow bg-gradient-to-br from-green-500 to-green-700 overflow-hidden relative">
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full px-2 py-0.5">
                <span className="text-xs font-bold text-white">$50</span>
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                <span className="text-2xl md:text-3xl lg:text-4xl font-black text-white">XBOX</span>
                <span className="text-[8px] md:text-[10px] text-green-100">Microsoft</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          variant="cta"
          size="lg"
          className="animate-fade-in-up text-sm sm:text-base lg:text-lg px-6 sm:px-8"
          style={{ animationDelay: '1s' }}
        >
          تسـوق الآن
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
