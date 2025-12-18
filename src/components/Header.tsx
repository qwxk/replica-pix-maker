const Header = () => {
  return (
    <header className="w-full py-6 px-4 md:px-8 border-b border-border/30 bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <div className="text-4xl sm:text-5xl font-black tracking-tight">
            <span className="text-foreground">3</span>
            <span className="text-primary">bdo</span>
          </div>
          <div className="h-12 w-px bg-muted-foreground/40"></div>
          <div className="text-right">
            <p className="text-sm sm:text-base font-semibold text-foreground">متجر عبدو للخدمات المالية</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Abdo Financial Services</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
