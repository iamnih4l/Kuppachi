import { cn } from "@/lib/utils";

interface StyleBadgeProps {
  label: string;
  className?: string;
}

const StyleBadge = ({ label, className }: StyleBadgeProps) => (
  <span
    className={cn(
      "px-3 py-1 rounded-full text-xs font-semibold",
      className
    )}
  >
    {label}
  </span>
);

export default StyleBadge;
