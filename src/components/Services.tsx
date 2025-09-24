import equipmentImage from "@/assets/insta360.jpg";

const Services = () => {
  const services = [
    {
      title: "Basic 360° Maps Package",
      description: "Professional Virtual Recording of Your Business Uploaded to Google Maps",
      features: ["Google Certified", "Better Rankings", "Higher Visibility", "More Customers"]
    },
    {
      title: "Virtual Tour",
      description: "Professional Virtual Tour Custom Tailored to Your Business for Website and Google Maps",
      features: ["87% More Views", "300% More Time Spent on Website", "Much Higher Rankings", "Google Certified"]
    },
    {
      title: "Website Service",
      description: "Virtual Tour Integration, Complete Website Redesign or Upgrade",
      features: ["Custom Embedding Virtual Tour With all Functions", "Complete Redesign or Upgrade of Website: Fonts, Modules, Logo, Copy, Translation", "Booking Software Integration", "Contact Form Integration"]
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
            Receive a professional virtual presence tailored to your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover-lift group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${index === 0 ? 'from-primary to-secondary' :
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

        <div className="relative rounded-2xl overflow-hidden max-w-4xl mx-auto mb-8">
          <div className="p-8 md:p-12 text-center">
            <h3
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent"
              style={{ marginTop: '-20px' }}
            >
              Professional Grade Equipment
            </h3>
            <p
              className="text-gray-200/80 text-xl md:text-2xl max-w-lg mx-auto"
              style={{ marginBottom: '60px' }}
            >
              We use the latest 360° cameras and technology to deliver crystal clear, professional results every time.
            </p>

            {/* Image wrapper */}
            <div className="relative rounded-2xl overflow-hidden mx-auto w-full max-w-xs md:max-w-sm lg:max-w-md">
              <img
                src={equipmentImage}
                alt="Professional 360° Camera Equipment"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};
export default Services;