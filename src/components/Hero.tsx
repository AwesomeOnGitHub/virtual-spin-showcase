import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-360-tour.jpg";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col justify-start items-center mb-16 text-center overflow-hidden pt-8 md:pt-6 lg:pt-12 px-4">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        <span className="hero-gradient-text">{t("hero.main")}</span>
        <br />
        <span className="hero-gradient-text"></span>
      </h1>

      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
        {t("hero.stepinsideyourbusiness")}
      </p>

      <div className="w-full md:w-[70%] h-[50vh] md:h-[60vh]">
        <iframe
          src="https://www.3dvista.com/samples/real_estate_virtual_tour.html"
          width="100%"
          height="100%"
          allowFullScreen
          frameBorder="0"
          className="border-none"
          title="3DVista Virtual Tour"
        />
      </div>
    </section>
  );
};

export default Hero;