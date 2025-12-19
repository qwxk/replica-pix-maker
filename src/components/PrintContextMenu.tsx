import { ReactNode, useState, useCallback } from "react";
import { Printer, Download, Share2, Copy } from "lucide-react";

interface PrintContextMenuProps {
  children: ReactNode;
}

const PrintContextMenu = ({ children }: PrintContextMenuProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);
  }, []);

  const handleClick = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handlePrint = useCallback(() => {
    setIsVisible(false);
    window.print();
  }, []);

  const handleCopyLink = useCallback(() => {
    setIsVisible(false);
    navigator.clipboard.writeText(window.location.href);
  }, []);

  const handleShare = useCallback(async () => {
    setIsVisible(false);
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    }
  }, []);

  return (
    <div onContextMenu={handleContextMenu} onClick={handleClick} className="min-h-screen">
      {children}
      
      {isVisible && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40 no-print" 
            onClick={() => setIsVisible(false)}
          />
          
          {/* Context Menu */}
          <div
            className="fixed z-50 min-w-[200px] bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl overflow-hidden animate-scale-in no-print"
            style={{
              left: `${Math.min(position.x, window.innerWidth - 220)}px`,
              top: `${Math.min(position.y, window.innerHeight - 200)}px`,
            }}
          >
            {/* Menu Header */}
            <div className="px-4 py-3 bg-gradient-to-r from-primary/20 to-transparent border-b border-border/30">
              <span className="text-sm font-semibold text-foreground">خيارات سريعة</span>
            </div>
            
            {/* Menu Items */}
            <div className="py-2">
              <button
                onClick={handlePrint}
                className="w-full flex items-center gap-3 px-4 py-3 text-foreground hover:bg-primary/20 transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Printer className="w-4 h-4 text-white" />
                </div>
                <div className="text-right flex-1">
                  <span className="block text-sm font-medium">طباعة الصفحة</span>
                  <span className="block text-xs text-muted-foreground">طباعة A4 بالعرض</span>
                </div>
              </button>

              <button
                onClick={handleCopyLink}
                className="w-full flex items-center gap-3 px-4 py-3 text-foreground hover:bg-primary/20 transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Copy className="w-4 h-4 text-white" />
                </div>
                <div className="text-right flex-1">
                  <span className="block text-sm font-medium">نسخ الرابط</span>
                  <span className="block text-xs text-muted-foreground">نسخ رابط الصفحة</span>
                </div>
              </button>

              {navigator.share && (
                <button
                  onClick={handleShare}
                  className="w-full flex items-center gap-3 px-4 py-3 text-foreground hover:bg-primary/20 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Share2 className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-right flex-1">
                    <span className="block text-sm font-medium">مشاركة</span>
                    <span className="block text-xs text-muted-foreground">مشاركة الصفحة</span>
                  </div>
                </button>
              )}
            </div>

            {/* Menu Footer */}
            <div className="px-4 py-2 bg-muted/30 border-t border-border/30">
              <span className="text-xs text-muted-foreground">اضغط في أي مكان للإغلاق</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PrintContextMenu;
