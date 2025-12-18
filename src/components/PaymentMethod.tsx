import { cn } from "@/lib/utils";

interface PaymentMethodProps {
  name: string;
  icon: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const PaymentMethod = ({ name, icon, className, style }: PaymentMethodProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-1.5 sm:gap-2 md:gap-3 group cursor-pointer", className)} style={style}>
      <div className="icon-circle w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
        {icon}
      </div>
      <span className="text-foreground text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold text-center leading-tight">{name}</span>
    </div>
  );
};

export default PaymentMethod;
