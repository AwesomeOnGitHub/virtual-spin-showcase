import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import CalendlyCard from "./CalendlyCard";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     business: '',
//     message: ''
//   });
//   const { toast } = useToast();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     toast({
//       title: "Message Sent!",
//       description: "We'll get back to you within 24 hours.",
//     });
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       business: '',
//       message: ''
//     });
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full rounded-xl p-3 flex justify-center items-center text-center scroll-mt-24 relative"
    >
      <div className="w-full max-w-4xl">
        <CalendlyCard />
      </div>
    </section>
  );
};

export default Contact;