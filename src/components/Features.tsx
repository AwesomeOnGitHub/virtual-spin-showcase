import beforeAfterImage from "@/assets/before-after.jpg";
import { Button } from "@/components/ui/button";

const Features = () => {
  const stats = [
    { number: "In 72h", label: "Photos are taken" },
    { number: "In 48h", label: "Uploaded to Google Maps" },
    { number: "In 7 Days", label: "Custom Website is Built" },
    { number: "Available", label: "In all of Europe" }
  ];

  const benefits = [
    {
      title: "Increase Engagement",
      description: "Virtual tours increase time spent on your website by up to 300%"
    },
    {
      title: "Boost Conversions",
      description: "Properties with virtual tours receive 87% more views than those without"
    },
    {
      title: "Build Trust",
      description: "Transparent 360° views build customer confidence before they visit"
    },
    {
      title: "Stand Out",
      description: "Differentiate your business with cutting-edge virtual technology"
    }
  ];

  return (
    <section id="services" className="section-padding pt-16 pb-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container-width">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold hero-gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>


        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="text-foreground">Transform Your Business with</span>
            <br />
            <span className="hero-gradient-text">Immersive Experiences</span>
          </h2>

          <div className="space-y-6 max-w-2xl text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
