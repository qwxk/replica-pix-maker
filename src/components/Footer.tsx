import { MessageCircle, MapPin } from "lucide-react";

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
            <p className="text-xs text-muted-foreground">متجر عبدو</p>
            <p className="text-[10px] text-muted-foreground/70">للخدمات المالية</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2 text-foreground">
            <span className="text-sm font-semibold">لأول مره في البيضاء وبـ أقل الأسعار</span>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <MapPin size={18} className="text-white" />
            </div>
          </div>
          <a 
            href="https://wa.me/218928102731" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm ltr" dir="ltr">+218 92-8102731</span>
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
