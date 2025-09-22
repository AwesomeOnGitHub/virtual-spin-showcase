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
    <section className="section-padding pt-32 md:pt-40 overflow-hidden">
      <div className="container-width mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8 flex flex-col justify-between h-full">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6 flex-1">
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
                    placeholder="Your Number"
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
                  placeholder="Tell us about your specific needs"
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

          {/* Calendly Module */}
          <div id="message" className="glass-card rounded-2xl p-8 flex flex-col justify-between h-full">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Schedule a Call with Calendly
              </h3>
              <p className="text-muted-foreground mb-6">
                Book a free consultation to discuss your needs
              </p>

              {/* Calendly Embed */}
              <div className="bg-background/50 rounded-xl p-4 border border-border/50 flex flex-col items-center justify-center py-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-white rounded-md"></div>
                </div>
                <p className="text-muted-foreground mb-4 text-center">
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  onClick={() =>
                    window.open("https://calendly.com/ballamatyas5/30min", "_blank")
                  }
                >
                  Open Calendar
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;