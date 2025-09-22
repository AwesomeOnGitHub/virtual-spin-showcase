import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import logo from "@/assets/logo.png";

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
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                  <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-xl font-bold">VirtualSpin</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Giving your Business The Best Virtual Appearance
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
                <li><a href="#" className="hover:text-primary transition-colors">Website Design</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>info@virtualspin.com</li>
                <li>Free Consultation</li>
                <li>Response Within 24h</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 VirtualSpin. All rights reserved. Transforming spaces into experiences.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;