import equipmentImage from "@/assets/equipment-showcase.jpg";

const Services = () => {
  const services = [
    {
      title: "360° Virtual Tours",
      description: "Immersive virtual experiences that let customers explore your space from anywhere.",
      features: ["Interactive hotspots", "HD quality", "Mobile optimized", "Easy embedding"]
    },
    {
      title: "Google Maps Integration",
      description: "Professional photography optimized for Google My Business and Street View.",
      features: ["Google certified", "Increased visibility", "Better rankings", "More customers"]
    },
    {
      title: "Website Integration",
      description: "Seamless integration with your existing website for maximum engagement.",
      features: ["Custom embedding", "Fast loading", "Responsive design", "Analytics included"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="hero-gradient-text">Professional Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We create stunning virtual experiences that showcase your business in the best light
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-8 hover-lift group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                index === 0 ? 'from-primary to-secondary' :
                index === 1 ? 'from-secondary to-tertiary' :
                'from-tertiary to-primary'
              } flex items-center justify-center mb-6 pulse-glow`}>
                <div className="w-6 h-6 bg-white rounded-md"></div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="relative rounded-2xl overflow-hidden max-w-4xl mx-auto">
          <img 
            src={equipmentImage} 
            alt="Professional 360° Camera Equipment" 
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Professional Grade Equipment
              </h3>
              <p className="text-white/90 text-lg max-w-md">
                We use the latest 360° cameras and technology to deliver crystal clear, professional results every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;