import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import CalendlyCard from "./CalendlyCard"; // Assuming this is a separate component

// Import Firebase (make sure you have firebase installed: npm install firebase or yarn add firebase)
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Your Firebase Configuration (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyAlRo4xOdOInR8S451-AZZvxTkJCuuzFVY",
  authDomain: "virtual-23943.firebaseapp.com",
  projectId: "virtual-23943",
  storageBucket: "virtual-23943.firebasestorage.app",
  messagingSenderId: "584050779094",
  appId: "1:584050779094:web:e158f4246f71579e2e3a77"
};

// Initialize Firebase (do this once, ideally outside the component or in a separate file)
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for loading indicator
  const { toast } = useToast();

  const handleSubmit = async (e) => { // Make handleSubmit async
    e.preventDefault();
    setIsSubmitting(true); // Set loading to true

    try {
      // Add a new document with a generated ID to the "contact_messages" collection
      await addDoc(collection(db, "contact_messages"), {
        ...formData, // Spread all form data
        timestamp: serverTimestamp() // Firebase server timestamp
      });

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
        //variant: "success", // Assuming your toast system has a 'success' variant
      });

      // Clear the form only on successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        message: ''
      });

    } catch (error) {
      console.error("Error adding document: ", error);
      toast({
        title: "Submission Failed",
        description: `There was an error sending your message: ${error.message}`,
        //variant: "destructive", // Assuming a 'destructive' variant for errors
      });
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <section
      id="contact"
      className="w-full rounded-xl p-3 flex justify-center items-center text-center scroll-mt-24 relative"
    >
      <div className="w-full max-w-4xl flex flex-col items-center">
        {/* Contact Form */}
       <div className="mb-8 p-6 bg-grey shadow-md rounded-lg w-full md:w-3/4 lg:w-1/2">
        <h2 className="text-2xl font-bold mb-6">Send us a message!</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">Phone (Optional)</label>
            <Input
              type="tel" // Use tel for phone numbers
              id="phone"
              name="phone"
              placeholder="Your Phone (Optional)"
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="business" className="sr-only">Business (Optional)</label>
            <Input
              type="text"
              id="business"
              name="business"
              placeholder="Your Business (Optional)"
              value={formData.business}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your Message..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              disabled={isSubmitting}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>

      {/* Calendly Card - Rendered below the contact form */}
      <CalendlyCard />
    </div>
    </section >
  );
};

export default Contact;