import { cn } from "@/lib/utils";

interface GiftCardProps {
  brand: string;
  price: string;
  bgColor: string;
  textColor?: string;
  logo: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const GiftCard = ({ brand, price, bgColor, textColor = "text-white", logo, className, style }: GiftCardProps) => {
  return (
    <div 
      className={cn(
        "relative w-32 h-20 md:w-40 md:h-24 rounded-xl card-shadow transition-transform duration-300 hover:scale-105 cursor-pointer overflow-hidden",
        bgColor,
        className
      )}
      style={style}
    >
      <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full px-2 py-0.5">
        <span className={cn("text-xs font-bold", textColor)}>{price}</span>
      </div>
      <div className="flex items-center justify-center h-full">
        {logo}
      </div>
    </div>
  );
};

export default GiftCard;
