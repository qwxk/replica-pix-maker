import { cn } from "@/lib/utils";

interface PaymentMethodProps {
  name: string;
  icon: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const PaymentMethod = ({ name, icon, className, style }: PaymentMethodProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-3 group cursor-pointer", className)} style={style}>
      <div className="icon-circle w-20 h-20 md:w-24 md:h-24 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
        {icon}
      </div>
      <span className="text-foreground text-sm md:text-base font-semibold">{name}</span>
    </div>
  );
};

export default PaymentMethod;
