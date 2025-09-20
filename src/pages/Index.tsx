import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="smooth-scroll">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Features />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="section-padding bg-muted/10 border-t border-border/50">
        <div className="container-width">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                <span className="text-xl font-bold">VirtualSpin</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Creating immersive 360° virtual tours that transform how businesses showcase their spaces.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover-lift">
                  <div className="w-4 h-4 bg-primary rounded-sm"></div>
                </div>
                <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover-lift">
                  <div className="w-4 h-4 bg-secondary rounded-sm"></div>
                </div>
                <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover-lift">
                  <div className="w-4 h-4 bg-tertiary rounded-sm"></div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Services</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">360° Virtual Tours</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Google Maps Integration</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Website Integration</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Professional Photography</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>hello@virtualspin.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Available 24/7</li>
                <li>Free Consultation</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 VirtualSpin. All rights reserved. Transforming spaces into experiences.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;