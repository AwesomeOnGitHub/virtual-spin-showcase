import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container-width">
        {/* Use grid for equal spacing */}
        <div className="grid grid-cols-3 items-center h-16 md:h-20">
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <img src="logo.png" alt="Logo" className="w-14 h-14 mr-2" />
            <span className="text-xl md:text-2xl font-bold text-foreground">
              VirtualSpin
            </span>
          </div>

          {/* Center: Tagline */}
          <div className="hidden md:flex justify-center items-center">
            <span className="text-center">
              Virtual Tours and Web Design Services
            </span>
          </div>

          {/* Right: Button */}
          <div className="flex justify-end">
            <Button
              variant="default"
              className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-glow"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;