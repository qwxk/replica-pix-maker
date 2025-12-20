import { MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-center footer-glass py-4 sm:py-6 px-3 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
            <span className="text-foreground">3</span>
            <span className="text-primary">bdo</span>
          </div>
          <div className="divider divider-horizontal mx-0 h-6 sm:h-8"></div>
          <div className="text-right">
            <p className="text-[10px] sm:text-xs text-muted-foreground">متجر عبدو للخدمات المالية</p>
            <p className="text-[8px] sm:text-[10px] text-muted-foreground/70">Abdo Financial Services</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex items-center gap-2 text-foreground">
            <span className="text-xs sm:text-sm font-semibold">لأول مره في البيضاء وبـ أقل الأسعار</span>
            <div className="avatar placeholder">
              <div className="bg-primary text-primary-foreground w-6 h-6 sm:w-8 sm:h-8 rounded-full">
                <MapPin size={14} className="sm:hidden" />
                <MapPin size={18} className="hidden sm:block" />
              </div>
            </div>
          </div>
          <a 
            href="https://wa.me/218928102731" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs sm:text-sm ltr" dir="ltr">+218 92-8102731</span>
            <div className="avatar placeholder">
              <div className="bg-success text-success-content w-6 h-6 sm:w-8 sm:h-8 rounded-full">
                <MessageCircle size={14} className="sm:hidden" />
                <MessageCircle size={18} className="hidden sm:block" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
