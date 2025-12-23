const Header = () => {
  return (
    <header className="w-full py-4 sm:py-5 px-4 sm:px-6 md:px-8 header-glass">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {/* Logo Section - Material Dashboard Style */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Logo with gradient background */}
          <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl icon-material-primary">
            <span className="text-2xl sm:text-3xl md:text-4xl font-black text-primary-foreground">3</span>
          </div>
          
          <div className="flex flex-col items-start">
            <div className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              <span className="text-foreground">3</span>
              <span className="text-gradient-primary">bdo</span>
            </div>
            <div className="hidden sm:flex flex-col items-start">
              <p className="text-xs md:text-sm font-medium text-foreground/90">متجر عبدو للخدمات المالية</p>
              <p className="text-[10px] md:text-xs text-muted-foreground">Abdo Financial Services</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;