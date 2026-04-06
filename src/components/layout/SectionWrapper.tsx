import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function SectionWrapper({ id, children, className, containerClassName }: SectionWrapperProps) {
  const { ref, isInView } = useInView();

  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <div
        ref={ref}
        className={cn(
          "container mx-auto px-4 md:px-6 opacity-0",
          isInView && "animate-fade-in",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
