import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import equipmentImage from "@/assets/insta360.jpg";

const Services = () => {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

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
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual YouTube video ID
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
      videoUrl: "https://www.youtube.com/watch?v=nbXneZzFh8w", // Replace with actual YouTube video ID
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
      videoUrl: "https://www.youtube.com/watch?v=nbXneZzFh8w", // Replace with actual YouTube video ID
    },
  ];

  const openDialog = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedVideoUrl("");
  };

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
              aria-label={`View details for ${t(service.title)}`}
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
          <div className="relative w-full" style={{ paddingTop: "56.25%" /* 16:9 aspect ratio */ }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={selectedVideoUrl}
              title={`Video for ${t(
                services.find((s) => s.videoUrl === selectedVideoUrl)?.title || "service"
              )}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;