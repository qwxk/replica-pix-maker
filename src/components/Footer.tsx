import { MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-5 sm:py-6 px-4 sm:px-6 md:px-8 footer-glass">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-5 sm:gap-6 md:flex-row md:justify-between">
        {/* Logo Section - Material Style */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl icon-material-primary">
            <span className="text-xl sm:text-2xl font-black text-primary-foreground">3</span>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight">
              <span className="text-foreground">3</span>
              <span className="text-gradient-primary">bdo</span>
            </div>
            <p className="text-[10px] sm:text-xs text-muted-foreground">متجر عبدو للخدمات المالية</p>
          </div>
        </div>

        {/* Contact Section - Material Cards */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-3 text-foreground">
            <span className="text-xs sm:text-sm font-medium">لأول مره في البيضاء وبـ أقل الأسعار</span>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl icon-material-secondary flex items-center justify-center">
              <MapPin size={16} className="text-primary-foreground sm:hidden" />
              <MapPin size={20} className="text-primary-foreground hidden sm:block" />
            </div>
          </div>
          <a 
            href="https://wa.me/218928102731" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-foreground hover:opacity-80 transition-opacity"
          >
            <span className="text-xs sm:text-sm ltr font-medium" dir="ltr">+218 92-8102731</span>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(195deg, #25D366, #128C7E)', boxShadow: '0 14px 26px -12px rgba(37, 211, 102, 0.42), 0 4px 23px 0 rgba(0, 0, 0, 0.12)' }}>
              <MessageCircle size={16} className="text-white sm:hidden" />
              <MessageCircle size={20} className="text-white hidden sm:block" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;