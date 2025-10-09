import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
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
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      console.log("Submitting form data to Firestore:", data);
      const docRef = await addDoc(collection(db, "contact_messages"), {
        ...data,
        timestamp: serverTimestamp(),
      });
      console.log("Document written with ID:", docRef.id);
      toast({
        title: t("contact.success.title"),
        description: t("contact.success.description"),
      });
      form.reset();
    } catch (error: any) {
      console.error("Firestore write error:", {
        message: error.message,
        code: error.code,
        stack: error.stack,
        details: error.details,
      });
      let errorMessage = t("contact.error.description");
      if (error.code === "permission-denied") {
        errorMessage = t("contact.errors.permission_denied");
      } else if (error.code === "unavailable") {
        errorMessage = t("contact.errors.network");
      } else if (error.code === "invalid-argument") {
        errorMessage = t("contact.errors.invalid_argument");
      }
      toast({
        title: t("contact.error.title"),
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24">
      <Card className="glass-card hover-lift mx-auto max-w-lg">
        <CardHeader>
          <CardTitle className="hero-gradient-text">{t("contact.title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.form.name.label")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("contact.form.name.placeholder")}
                        {...field}
                        aria-describedby={form.formState.errors.name ? "name-error" : undefined}
                      />
                    </FormControl>
                    <FormMessage id="name-error" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.form.email.label")}</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder={t("contact.form.email.placeholder")}
                        {...field}
                        aria-describedby={form.formState.errors.email ? "email-error" : undefined}
                      />
                    </FormControl>
                    <FormMessage id="email-error" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.form.message.label")}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t("contact.form.message.placeholder")}
                        {...field}
                        aria-describedby={form.formState.errors.message ? "message-error" : undefined}
                      />
                    </FormControl>
                    <FormMessage id="message-error" />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t("contact.form.submitting")}
                  </>
                ) : (
                  t("contact.form.submit")
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactForm;