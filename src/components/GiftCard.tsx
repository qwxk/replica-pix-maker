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
        "group relative w-32 h-20 md:w-44 md:h-28 rounded-2xl cursor-pointer overflow-hidden",
        "transform transition-all duration-500 ease-out",
        "hover:scale-105 hover:-translate-y-2",
        className
      )}
      style={style}
    >
      {/* Main card body with gradient */}
      <div 
        className={cn(
          "absolute inset-0 rounded-2xl",
          bgColor
        )}
      />
      
      {/* Glossy overlay effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-black/20" />
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full" 
        style={{ transition: 'transform 0.7s ease-in-out, opacity 0.3s ease' }}
      />
      
      {/* Subtle inner glow */}
      <div className="absolute inset-[1px] rounded-2xl border border-white/20" />
      
      {/* Premium shadow layers */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-transparent via-transparent to-black/30 -z-10 blur-sm" />
      <div className="absolute -inset-2 rounded-3xl bg-black/10 -z-20 blur-md group-hover:blur-lg transition-all duration-300" />
      
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 to-transparent rounded-tr-2xl" />
      </div>
      
      {/* Price tag with premium styling */}
      <div className="absolute top-2 right-2 md:top-3 md:right-3">
        <div className="relative">
          <div className="absolute inset-0 bg-black/20 rounded-full blur-sm" />
          <div className="relative bg-white/20 backdrop-blur-md rounded-full px-2.5 py-1 md:px-3 md:py-1.5 border border-white/30 shadow-lg">
            <span className={cn("text-[10px] md:text-xs font-bold tracking-wide", textColor)}>
              {price}
            </span>
          </div>
        </div>
      </div>
      
      {/* Logo container with elegant positioning */}
      <div className="relative flex items-center justify-center h-full pt-1">
        <div className="transform transition-transform duration-300 group-hover:scale-110 drop-shadow-lg">
          {logo}
        </div>
      </div>
      
      {/* Bottom subtle gradient bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      
      {/* Micro pattern overlay for texture */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
          backgroundSize: '8px 8px'
        }}
      />
    </div>
  );
};

export default GiftCard;
