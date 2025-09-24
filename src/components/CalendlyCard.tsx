import { InlineWidget } from "react-calendly";

export default function CalendlyCard() {

  return (
  <div className="h-[910px] w-full max-w-[600px] rounded-xl border p-3 mx-auto">
    <InlineWidget
      url="https://calendly.com/virtualspin-info/30min?hide_gdpr_banner=1"
      styles={{ width: "100%", height: "100%" }} // force iframe to fill container
      pageSettings={{
        hideEventTypeDetails: false,
        hideLandingPageDetails: true,
        primaryColor: "FF6933", // accent
        textColor: "FFFFFF",    // text color
        backgroundColor: "252525", // background
      }}
    />
  </div>
);
}