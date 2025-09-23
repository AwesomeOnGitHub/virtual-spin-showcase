import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-360-tour.jpg";

const panoramicImage = '3d.jpg';

const Hero = () => {
  return (
    <section className="flex flex-col justify-start items-center mb-20 text-center overflow-hidden pt-10 md:pt-4 lg:pt-10 px-4">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        <span className="hero-gradient-text">Virtual Tours & Web Design</span>
        <br />
        <span className="hero-gradient-text"></span>
      </h1>

      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
        Give Your Business a Captivating Virtual Appearance Utilizing our Virtual Tours and Web Design Services</p>

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

  )
}



export default Hero;