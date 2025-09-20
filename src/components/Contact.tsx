import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show a success message
    // To make this actually work, you'll need Supabase integration
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      business: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-muted/20 to-background">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="hero-gradient-text">Get Started Today</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with immersive virtual tours? Contact us for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Full Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Email Address *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Phone Number
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-background/50 border-border/50 focus:border-primary"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Business Name
                  </label>
                  <Input
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="bg-background/50 border-border/50 focus:border-primary"
                    placeholder="Your Business"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Project Details
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  placeholder="Tell us about your space and what you'd like to achieve with a virtual tour..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 pulse-glow"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Calendly */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-white rounded-md"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">hello@virtualspin.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-tertiary flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-white rounded-md"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tertiary to-primary flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-white rounded-md"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Response Time</h4>
                    <p className="text-muted-foreground">Within 2 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendly Integration */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Schedule a Call</h3>
              <p className="text-muted-foreground mb-6">
                Book a free consultation to discuss your virtual tour needs
              </p>
              
              {/* Calendly Embed - Replace with your actual Calendly URL */}
              <div className="bg-background/50 rounded-xl p-4 border border-border/50">
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-white rounded-md"></div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Calendly integration ready
                  </p>
                  <Button 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                    onClick={() => {
                      // Replace with actual Calendly popup or redirect
                      window.open('https://calendly.com/your-calendar-link', '_blank');
                    }}
                  >
                    Open Calendar
                  </Button>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4 text-center">
                * Replace the Calendly URL above with your actual booking link
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;