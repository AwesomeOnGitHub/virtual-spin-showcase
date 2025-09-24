import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import logo from "@/assets/logo.png";
import mapicon from "@/assets/mapicon.png";
import virtualicon from "@/assets/virtualicon.png";
import www from "@/assets/www.png";

const Index = () => {
  return (
    <div className="smooth-scroll">
      <Navigation />
      <main>
        <Hero />

        {/* Services with scroll offset */}
        <section id="services" className="scroll-mt-24">
          <Services />
        </section>

        <Features />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="section-padding pt-8 bg-muted/10 border-t border-border/50">
        <div className="container-width">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Social Icons */}
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
                <a
                  href="#services"
                  className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover-lift"
                >
                  <img src={mapicon} alt="Map Icon" className="w-10 h-10 object-contain" />
                </a>
                <a
                  href="#services"
                  className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover-lift"
                >
                  <img src={virtualicon} alt="Virtual Icon" className="w-8 h-8 object-contain" />
                </a>
                <a
                  href="#services"
                  className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover-lift"
                >
                  <img src={www} alt="WWW Icon" className="w-8 h-8 object-contain" />
                </a>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Services</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a  className="hover:text-primary transition-colors">
                    360° Virtual Tours
                  </a>
                </li>
                <li>
                  <a  className="hover:text-primary transition-colors">
                    Google Maps Integration
                  </a>
                </li>
                <li>
                  <a  className="hover:text-primary transition-colors">
                    Website Integration
                  </a>
                </li>
                <li>
                  <a  className="hover:text-primary transition-colors">
                    Website Design
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a  className="hover:text-primary transition-colors">
                    info@virtualspin.co
                  </a>
                </li>
                <li>
                  <a  className="hover:text-primary transition-colors">
                    Free Consultation
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors">
                    Response Within 24h
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-border/50 pt-8 text-center text-muted-foreground">
            <p>
              &copy; 2025 VirtualSpin. All rights reserved. Transforming spaces into experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;