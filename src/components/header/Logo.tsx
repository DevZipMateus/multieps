
import { cn } from "@/lib/utils";

interface LogoProps {
  scrolled: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  return (
    <a href="#" className="flex items-center z-10 relative">
      <img 
        src="/lovable-uploads/b29ec093-a227-4bac-8d00-7802d359db88.png" 
        alt="MULTI-EPS - Design e Leveza para sua Obra" 
        className={cn(
          "h-10 md:h-12 transition-all duration-300",
          scrolled ? "" : "",
          "hover:scale-105"
        )}
      />
    </a>
  );
};

export default Logo;
