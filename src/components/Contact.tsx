import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import CalendlyCard from "./CalendlyCard"; // Assuming this is a separate component

// Import Firebase (make sure you have firebase installed: npm install firebase or yarn add firebase)
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
const Contact = () => {

  return (
    <section
      id="contact"
      className="w-full rounded-xl p-3 flex justify-center items-center text-center scroll-mt-24 relative"
    >
      <div>
      <CalendlyCard />
    </div>
    </section >
  );
};

export default Contact;