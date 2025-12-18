import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-4 sm:py-6 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        {/* Logo Section */}
        <div className="flex items-center gap-2 sm:gap-3 order-2 sm:order-1">
          <div className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
            <span className="text-foreground">w</span>
            <span className="text-primary">e</span>
          </div>
          <div className="h-6 sm:h-8 w-px bg-muted-foreground/30"></div>
          <div className="text-right">
            <p className="text-[10px] sm:text-xs text-muted-foreground">متجر والتـر القـراضي</p>
            <p className="text-[8px] sm:text-[10px] text-muted-foreground/70">Walter Elgaradi Store</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center sm:items-end gap-1.5 sm:gap-2 order-1 sm:order-2">
          <a 
            href="https://instagram.com/walter.elgaradi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs sm:text-sm">@walter.elgaradi</span>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
              <Instagram size={14} className="text-white sm:w-[18px] sm:h-[18px]" />
            </div>
          </a>
          <a 
            href="https://wa.me/218930657289" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs sm:text-sm ltr" dir="ltr">+218 93-0657289</span>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500 flex items-center justify-center">
              <MessageCircle size={14} className="text-white sm:w-[18px] sm:h-[18px]" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
