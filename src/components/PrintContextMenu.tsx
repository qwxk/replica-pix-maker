import { ReactNode, useState, useCallback } from "react";
import { Printer, ImageIcon, Share2, Copy } from "lucide-react";
import html2canvas from "html2canvas";
import { toast } from "sonner";

interface PrintContextMenuProps {
  children: ReactNode;
}

export default function PrintContextMenu({ children }: PrintContextMenuProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isExporting, setIsExporting] = useState(false);

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

  const handleExportImage = useCallback(async () => {
    setIsVisible(false);
    setIsExporting(true);
    
    toast.info("جاري تصدير الصورة...");
    
    try {
      const element = document.querySelector(".min-h-screen.gradient-bg") as HTMLElement;
      if (!element) {
        toast.error("خطأ في تصدير الصورة");
        return;
      }

      const targetWidth = 3508;
      const targetHeight = 2480;

      const canvas = await html2canvas(element, {
        scale: 3,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#0a0a1a",
        width: element.scrollWidth,
        height: element.scrollHeight,
        logging: false,
      });

      const finalCanvas = document.createElement("canvas");
      finalCanvas.width = targetWidth;
      finalCanvas.height = targetHeight;
      const ctx = finalCanvas.getContext("2d");
      
      if (!ctx) {
        toast.error("خطأ في إنشاء الصورة");
        return;
      }

      ctx.fillStyle = "#0a0a1a";
      ctx.fillRect(0, 0, targetWidth, targetHeight);

      const scaleX = targetWidth / canvas.width;
      const scaleY = targetHeight / canvas.height;
      const scale = Math.min(scaleX, scaleY);
      
      const scaledWidth = canvas.width * scale;
      const scaledHeight = canvas.height * scale;
      const offsetX = (targetWidth - scaledWidth) / 2;
      const offsetY = (targetHeight - scaledHeight) / 2;

      ctx.drawImage(canvas, offsetX, offsetY, scaledWidth, scaledHeight);

      finalCanvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.download = "madar-services-A4.png";
          link.href = url;
          link.click();
          URL.revokeObjectURL(url);
          toast.success("تم تصدير الصورة بنجاح!");
        }
      }, "image/png", 1.0);
      
    } catch (error) {
      console.error("Export error:", error);
      toast.error("حدث خطأ أثناء التصدير");
    } finally {
      setIsExporting(false);
    }
  }, []);

  const handleCopyLink = useCallback(() => {
    setIsVisible(false);
    navigator.clipboard.writeText(window.location.href);
    toast.success("تم نسخ الرابط!");
  }, []);

  const handleShare = useCallback(async () => {
    setIsVisible(false);
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
      } catch {
        console.log("Share cancelled");
      }
    }
  }, []);

  return (
    <div onContextMenu={handleContextMenu} onClick={handleClick} className="min-h-screen">
      {children}
      
      {isExporting && (
        <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-center justify-center no-print">
          <div className="bg-card p-6 rounded-xl shadow-2xl border border-border flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <span className="text-foreground font-medium">جاري تصدير الصورة...</span>
          </div>
        </div>
      )}
      
      {isVisible && (
        <>
          <div 
            className="fixed inset-0 z-40 no-print" 
            onClick={() => setIsVisible(false)}
          />
          
          <div
            className="fixed z-50 min-w-[200px] bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl overflow-hidden animate-scale-in no-print"
            style={{
              left: `${Math.min(position.x, window.innerWidth - 220)}px`,
              top: `${Math.min(position.y, window.innerHeight - 280)}px`,
            }}
          >
            <div className="px-4 py-3 bg-gradient-to-r from-primary/20 to-transparent border-b border-border/30">
              <span className="text-sm font-semibold text-foreground">خيارات سريعة</span>
            </div>
            
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
                onClick={handleExportImage}
                disabled={isExporting}
                className="w-full flex items-center gap-3 px-4 py-3 text-foreground hover:bg-primary/20 transition-all duration-200 group disabled:opacity-50"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <ImageIcon className="w-4 h-4 text-white" />
                </div>
                <div className="text-right flex-1">
                  <span className="block text-sm font-medium">تصدير كصورة</span>
                  <span className="block text-xs text-muted-foreground">A4 أفقي - 300 DPI</span>
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

            <div className="px-4 py-2 bg-muted/30 border-t border-border/30">
              <span className="text-xs text-muted-foreground">اضغط في أي مكان للإغلاق</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
