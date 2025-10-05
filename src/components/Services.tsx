import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import equipmentImage from "@/assets/insta360.jpg";

const Services = () => {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [videoError, setVideoError] = useState(false);

  // Check if running on localhost for testing
  const isLocalhost = useEffect(() => {
    return window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
  }, []);

  const services = [
    {
      title: "service.1.title",
      description: "service.1.description",
      features: [
        "service.1.feature1",
        "service.1.feature2",
        "service.1.feature3",
        "service.1.feature4",
      ],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Rick Astley - Never Gonna Give You Up
    },
    {
      title: "service.2.title",
      description: "service.2.description",
      features: [
        "service.2.feature1",
        "service.2.feature2",
        "service.2.feature3",
        "service.2.feature4",
      ],
      videoUrl: "https://www.youtube.com/embed/nbXneZzFh8w", // Example: 360° Virtual Tour demo
    },
    {
      title: "service.3.title",
      description: "service.3.description",
      features: [
        "service.3.feature1",
        "service.3.feature2",
        "service.3.feature3",
        "service.3.feature4",
      ],
      videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0", // Example: PSY - Gangnam Style
    },
  ];

  const openDialog = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setVideoError(false);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedVideoUrl("");
    setVideoError(false);
  };

  const handleVideoError = () => {
    setVideoError(true);
    console.error("Failed to load YouTube video:", selectedVideoUrl);
  };

  // Add YouTube iframe API script for better loading control
  useEffect(() => {
    if (isDialogOpen && selectedVideoUrl && !videoError) {
      // Load YouTube Iframe API if not already loaded
      if (!window.YT) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
        
        window.onYouTubeIframeAPIReady = () => {
          console.log("YouTube Iframe API ready");
        };
      }
    }
  }, [isDialogOpen, selectedVideoUrl, videoError]);

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="hero-gradient-text">{t("services.professional")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("services.tailored")}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <button
              key={index}
              className="glass-card rounded-2xl p-8 hover-lift group text-left focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => openDialog(service.videoUrl)}
              aria-label={`View video for ${t(service.title)}`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                  index === 0
                    ? "from-primary to-secondary"
                    : index === 1
                    ? "from-secondary to-tertiary"
                    : "from-tertiary to-primary"
                } flex items-center justify-center mb-6 pulse-glow`}
              >
                <div className="w-6 h-6 bg-white rounded-md"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{t(service.title)}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{t(service.description)}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{t(feature)}</span>
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>
        <div className="relative rounded-2xl overflow-hidden max-w-4xl mx-auto mb-8">
          <div className="p-8 md:p-12 text-center">
            <h3
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent"
              style={{ marginTop: "-20px" }}
            >
              {t("services.equipment")}
            </h3>
            <p
              className="text-gray-200/80 text-xl md:text-2xl max-w-lg mx-auto"
              style={{ marginBottom: "60px" }}
            >
              {t("services.weusethelatest")}
            </p>
            <div className="relative rounded-2xl overflow-hidden mx-auto w-full max-w-xs md:max-w-sm lg:max-w-md">
              <img
                src={equipmentImage}
                alt="Professional 360° Camera Equipment"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="glass-card max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground">
              {t(
                services.find((s) => s.videoUrl === selectedVideoUrl)?.title || "services.professional"
              )}
            </DialogTitle>
          </DialogHeader>
          {videoError ? (
            <div className="text-center text-destructive p-4">
              <p>{t("video.error", { defaultValue: "Unable to load video. Please try again later." })}</p>
            </div>
          ) : (
            <div className="relative w-full" style={{ paddingTop: "56.25%" /* 16:9 aspect ratio */ }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={`${selectedVideoUrl}?rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
                title={`Video for ${t(
                  services.find((s) => s.videoUrl === selectedVideoUrl)?.title || "service"
                )}`}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                onError={handleVideoError}
                onLoad={() => console.log("YouTube video loaded successfully:", selectedVideoUrl)}
              />
            </div>
          )}
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;