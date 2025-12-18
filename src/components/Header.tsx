const Header = () => {
  return (
    <header className="w-full py-6 px-4 md:px-8 border-b border-border/30 bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <div className="text-5xl sm:text-6xl font-black text-foreground tracking-tight">
            <span className="text-foreground">w</span>
            <span className="text-primary">e</span>
          </div>
          <div className="h-12 w-px bg-muted-foreground/40"></div>
          <div className="text-right">
            <p className="text-sm sm:text-base font-semibold text-foreground">متجر والتـر القـراضي</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Walter Elgaradi Store</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
