const Header = () => {
  return (
    <header className="w-full py-6 px-4 md:px-8 border-b border-border/30 bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
            <span className="text-3xl sm:text-4xl font-black text-primary-foreground">ع</span>
          </div>
          <div className="h-12 w-px bg-muted-foreground/40"></div>
          <div className="text-right">
            <p className="text-base sm:text-lg font-bold text-foreground">متجر عبدو</p>
            <p className="text-xs sm:text-sm text-primary font-medium">للخدمات المالية</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
