import * as React from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";

import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import { Label } from "@/components/ui/label";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useState } from "react";

import { toast } from "@/components/ui/use-toast";

import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

import { db } from "@/lib/firebase";

// Define the form schema using Zod

const formSchema = z.object({

  name: z.string().min(2, { message: "contact.errors.name" }),

  email: z.string().email({ message: "contact.errors.email" }),

  message: z.string().min(10, { message: "contact.errors.message" }),

});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {

  const { t } = useTranslation();

  const {

    register,

    handleSubmit,

    formState: { errors },

    reset,

  } = useForm<FormData>({

    resolver: zodResolver(formSchema),

  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {

    setIsSubmitting(true);

    try {

      // Add a new document to the "contact_messages" collection

      await addDoc(collection(db, "contact_messages"), {

        ...data,

        timestamp: serverTimestamp(),

      });

      toast({

        title: t("contact.success.title"),

        description: t("contact.success.description"),

      });

      // Reset the form using react-hook-form's reset

      reset();

    } catch (error) {

      console.error("Error adding document: ", error);

      toast({

        title: t("contact.error.title"),

        description: t("contact.error.description"),

      });

    } finally {

      setIsSubmitting(false);

    }

  };

  // Helper function to safely translate error messages

  const translateError = (message?: string) => {

    return message ? t(message) : t("contact.errors.generic");

  };

  return (
    <Card className="glass-card hover-lift mx-auto max-w-lg">
      <CardHeader>
        <CardTitle className="hero-gradient-text">{t("contact.title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">{t("contact.form.name.label")}</Label>
            <Input

              id="name"

              placeholder={t("contact.form.name.placeholder")}

              {...register("name")}

              className={errors.name ? "border-destructive" : ""}

            />

            {errors.name && (
              <p className="text-sm text-destructive">{translateError(errors.name.message)}</p>

            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t("contact.form.email.label")}</Label>
            <Input

              id="email"

              type="email"

              placeholder={t("contact.form.email.placeholder")}

              {...register("email")}

              className={errors.email ? "border-destructive" : ""}

            />

            {errors.email && (
              <p className="text-sm text-destructive">{translateError(errors.email.message)}</p>

            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{t("contact.form.message.label")}</Label>
            <Textarea

              id="message"

              placeholder={t("contact.form.message.placeholder")}

              {...register("message")}

              className={errors.message ? "border-destructive" : ""}

            />

            {errors.message && (
              <p className="text-sm text-destructive">{translateError(errors.message.message)}</p>

            )}
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>

            {isSubmitting ? t("contact.form.submitting") : t("contact.form.submit")}
          </Button>
        </form>
      </CardContent>
    </Card>

  );

};

export default ContactForm;
