import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import logo from "@/assets/logo.png";
import mapIcon from "@/assets/mapIcon.png";
import virtualIcon from "@/assets/virtualIcon.png";
import wwwIcon from "@/assets/wwwIcon.png";
import { useTranslation } from "react-i18next";

const Index = () => {
  
  const { t } = useTranslation();
  
  return (
    <div className="smooth-scroll">
      <Navigation />
      <main>
        <Hero />

        {/* Services with scroll offset */}
        <section id="services" className="scroll-mt-24">
          <Services />
        </section>

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
                {t("index.giving")}
              </p>
              <div className="flex space-x-4">
                <a
                  href="#services"
                  className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover-lift"
                >
                  <img src={mapIcon} alt="Map Icon" className="w-8 h-8 object-contain" />
                </a>
                <a
                  href="#services"
                  className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover-lift"
                >
                  <img src={virtualIcon} alt="Virtual Icon" className="w-8 h-8 object-contain" />
                </a>
                <a
                  href="#services"
                  className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover-lift"
                >
                  <img src={wwwIcon} alt="WWW Icon" className="w-8 h-8 object-contain" />
                </a>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">{t("index.services")}</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a  className="hover:text-primary transition-colors">
                    {t("index.virtualtour")}
                  </a>
                </li>
                <li>
                  <a  className="hover:text-primary transition-colors">
                    {t("index.google")}
                  </a>
                </li>
                <li>
                  <a  className="hover:text-primary transition-colors">
                    {t("index.website")}
                  </a>
                </li>
                <li>
                  <a  className="hover:text-primary transition-colors">
                    {t("index.custom")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">{t("index.contact")}</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a  className="hover:text-primary transition-colors">
                    {t("index.info@virtualspin")}
                  </a>
                </li>
                <li>
                  <a  className="hover:text-primary transition-colors">
                    {t("index.free")}
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors">
                    {t("index.response")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-border/50 pt-8 text-center text-muted-foreground">
            <p>
              &copy; {t("index.2025")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;