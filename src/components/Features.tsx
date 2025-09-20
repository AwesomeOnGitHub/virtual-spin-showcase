import beforeAfterImage from "@/assets/before-after.jpg";

const Features = () => {
  const stats = [
    { number: "500+", label: "Virtual Tours Created" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24h", label: "Average Delivery" },
    { number: "50+", label: "Cities Covered" }
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
    <section id="features" className="section-padding">
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

        {/* Main Features */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              <span className="text-foreground">Transform Your Business with</span>
              <br />
              <span className="hero-gradient-text">Immersive Experiences</span>
            </h2>
            
            <div className="space-y-6">
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
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden hover-lift">
              <img 
                src={beforeAfterImage} 
                alt="Before and After Virtual Tour Comparison" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6 glass-card rounded-xl p-4">
              <p className="text-white font-medium text-center">
                See the difference immersive technology makes
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-card rounded-2xl p-8 md:p-12 text-center pulse-glow">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 hero-gradient-text">
            Ready to Get Started?
          </h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already using VirtualSpin to showcase their spaces
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all">
              Get Your Quote
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;