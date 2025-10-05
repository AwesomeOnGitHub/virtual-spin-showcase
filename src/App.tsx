import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import React from "react";

const queryClient = new QueryClient();

// Component to handle language setting based on URL
const LanguageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  // List of supported languages from i18n config
  const supportedLngs = [
    "en", "hu", "de", "it", "es", "fr", "ru", "nl", "da", "pt",
    "sv", "no", "fi", "is", "cs", "sk", "pl", "ro", "bg", "hr", 
    "sr", "sl", "et", "lv", "lt", "mt", "ga", "cy", "ca", "tr", 
    "mk", "sq", "bs"
  ];

  // Map special cases (e.g., 'be' -> 'nl', 'mc' -> 'fr')
  const languageMap: { [key: string]: string } = {
    be: "nl",
    mc: "fr",
    lu: "fr",
    ad: "ca",
  };

  // Set language based on URL
  React.useEffect(() => {
    const selectedLang = lang && supportedLngs.includes(lang) ? lang : "en";
    const langToSet = languageMap[selectedLang] || selectedLang;
    if (i18n.language !== langToSet) {
      i18n.changeLanguage(langToSet);
    }
  }, [lang, i18n]);

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Redirect root to default language */}
          <Route path="/" element={<Navigate to="/en" replace />} />
          {/* Language-specific routes */}
          <Route path="/:lang" element={<LanguageWrapper><Index /></LanguageWrapper>} />
          {/* Catch-all for invalid routes */}
          <Route path="/:lang/*" element={<LanguageWrapper><NotFound /></LanguageWrapper>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;