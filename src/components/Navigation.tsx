import { Button } from "@/components/ui/button";
import { LangSwitcher } from "@/components/LangSwitcher";
import { useTranslation } from "react-i18next";

const Navigation = () => {

  const { t } = useTranslation();

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container-width">
        <div className="flex items-center justify-between space-x-2 mr-3">
          <div className="flex items-center justify-left">
            <img src="logo.png" alt="Logo" className="w-14 h-14 m-2" />
            <span className="flex-1 text-center text-xl md:text-2xl font-bold text-foreground">
              VirtualSpin
            </span>

          </div >
          <div className="flex items-center space-x-2">
            <Button
              variant="default"
              className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-glow"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("navigation.get.started")}
            </Button>
            <div className="flex items-center justify-center">
              <LangSwitcher />
            </div>
          </div>
        </div>

        {/* Center: Tagline */}
        {/* <div className="hidden md:flex justify-center items-center">
            <span className="text-center">
              Virtual Tours and Web Design Services
            </span>
          </div> */}

      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navigation;