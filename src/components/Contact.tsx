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
    <section className="section-padding pt-16 md:pt-20 mb-4 overflow-hidden">
      <div className="container-width mx-auto">
        <div className="grid lg:grid-cols-1 gap-8">

          {/* Calendly Module */}
          <div id="message" className="glass-card rounded-2xl p-8 flex flex-col justify-between h-full">
            <div className="flex-1 text-center">
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