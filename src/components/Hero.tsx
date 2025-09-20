import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-360-tour.jpg";
import { ThreeSixtyViewer } from './ThreeSixtyViewer';

const panoramicImage = '3d.jpg';

const Hero = () => {
  return (
    <section className="section-padding pt-32 md:pt-40 overflow-hidden">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="hero-gradient-text">360° Virtual Tours</span>
              <br />
              <span className="text-foreground">That Captivate</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Transform your business with immersive virtual experiences.
              Professional 360° tours and photography for websites and Google Maps.
            </p>

       <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>My 360° Image Viewer (TypeScript)</h1>
      <div style={{ width: '80%', height: '80%', background: '#1a1a1a' }}> {/* Give the viewer a defined size */}
        <ThreeSixtyViewer imageUrl={panoramicImage} />
      </div>
    </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 pulse-glow"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Tour
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary/10"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Services
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden hover-lift">
              <img
                src={heroImage}
                alt="360° Virtual Tour Preview"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute top-4 right-4 glass-card rounded-full p-3">
                <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 glass-card rounded-xl p-4 float-animation">
              <span className="text-primary font-semibold">360°</span>
            </div>
            <div className="absolute -bottom-4 -right-4 glass-card rounded-xl p-4 float-animation" style={{ animationDelay: '2s' }}>
              <span className="text-secondary font-semibold">HD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;