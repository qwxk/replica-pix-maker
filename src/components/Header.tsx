const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="text-4xl font-black text-foreground tracking-tight">
            <span className="text-foreground">w</span>
            <span className="text-primary">e</span>
          </div>
          <div className="h-8 w-px bg-muted-foreground/30"></div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">متجر والتـر القـراضي</p>
            <p className="text-[10px] text-muted-foreground/70">Walter Elgaradi Store</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
