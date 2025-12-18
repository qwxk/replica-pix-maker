import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
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

        {/* Contact Section */}
        <div className="flex flex-col items-end gap-2">
          <a 
            href="https://instagram.com/walter.elgaradi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">@walter.elgaradi</span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
              <Instagram size={18} className="text-white" />
            </div>
          </a>
          <a 
            href="https://wa.me/218930657289" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm ltr" dir="ltr">+218 93-0657289</span>
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
              <MessageCircle size={18} className="text-white" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
