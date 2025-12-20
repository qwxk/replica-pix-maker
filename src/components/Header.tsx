const Header = () => {
  return (
    <header className="navbar header-glass py-4 sm:py-6 px-3 sm:px-6 md:px-8">
      <div className="navbar-center w-full flex justify-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            <span className="text-foreground">3</span>
            <span className="text-primary">bdo</span>
          </div>
          <div className="divider divider-horizontal mx-0 h-8 sm:h-10 md:h-12"></div>
          <div className="text-right">
            <p className="text-xs sm:text-sm md:text-base font-semibold text-foreground">متجر عبدو للخدمات المالية</p>
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Abdo Financial Services</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
