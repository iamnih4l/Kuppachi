import { cn } from "@/lib/utils";

interface StyleBadgeProps {
  label: string;
  className?: string;
  variant?: "default" | "sticker" | "stamp";
}

const StyleBadge = ({ label, className, variant = "default" }: StyleBadgeProps) => {
  if (variant === "sticker") {
    return (
      <span className={cn("sticker-badge", className)}>
        {label}
      </span>
    );
  }

  if (variant === "stamp") {
    return (
      <span className={cn("stamp-badge", className)}>
        {label}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border-2 border-current",
        className
      )}
    >
      {label}
    </span>
  );
};

export default StyleBadge;
