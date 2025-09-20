import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container-width">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary pulse-glow"></div>
            <span className="text-xl md:text-2xl font-bold text-foreground">VirtualSpin</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          
          <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-glow">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;