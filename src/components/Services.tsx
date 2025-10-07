import { useTranslation } from "react-i18next";

import equipmentImage from "@/assets/insta360.jpg";
import droneImage from "@/assets/drone.jpg";
import drone2Image from "@/assets/drone2.jpg";
import mapIcon from "@/assets/mapIcon.png";
import virtualIcon from "@/assets/virtualIcon.png";
import wwwIcon from "@/assets/wwwIcon.png";
import droneIcon from "@/assets/droneIcon.png";
import seoIcon from "@/assets/seoIcon.png";
import premiumIcon from "@/assets/premiumIcon.png";

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
    currentPrice: "service.1.currentPrice",
    oldPrice: "service.1.oldPrice",
    youtubeLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
    currentPrice: "service.2.currentPrice",
    oldPrice: "service.2.oldPrice",
    youtubeLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
    currentPrice: null,
    oldPrice: null,
    youtubeLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "service.4.title",
    description: "service.4.description",
    features: [
      "service.4.feature1",
      "service.4.feature2",
      "service.4.feature3",
      "service.4.feature4",
    ],
    currentPrice: "service.4.currentPrice",
    oldPrice: null,
    youtubeLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "service.5.title",
    description: "service.5.description",
    features: [
      "service.5.feature1",
      "service.5.feature2",
      "service.5.feature3",
      "service.5.feature4",
    ],
    currentPrice: "service.5.currentPrice",
    oldPrice: null,
    youtubeLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "service.6.title",
    description: "service.6.description",
    features: [
      "service.6.feature1",
      "service.6.feature2",
      "service.6.feature3",
      "service.6.feature4",
    ],
    currentPrice: null,
    oldPrice: null,
    youtubeLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const serviceIcons = [
  mapIcon,
  virtualIcon,
  premiumIcon,
  droneIcon,
  seoIcon,
  wwwIcon,
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="section-padding relative">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ textDecoration: 'none' }}>{t("services.professional")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("services.tailored")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const icon = serviceIcons[index];
            // Pair delays: 0s for 1&4, 2s for 2&5, 4s for 3&6
            const pairDelay = index % 3 === 0 ? '0s' : index % 3 === 1 ? '2s' : '4s';
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 flex flex-col"
                style={{
                  animation: 'wave-float 8s ease-in-out infinite',
                  animationDelay: pairDelay,
                  boxShadow: 'var(--shadow-orange)'
                }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={icon}
                    alt={`${t(service.title)} icon`}
                    className="h-10 w-10 object-contain mr-4"
                  />
                  <h3 className="text-2xl font-bold text-foreground">
                    {t(service.title)}
                  </h3>
                </div>
                {service.currentPrice && (
                  <div className="text-center mb-6">
                    {service.oldPrice ? (
                      <div className="flex justify-center items-center gap-2">
                        <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                          {t(service.currentPrice)}
                        </span>
                        <span className="line-through text-gray-400">
                          {t(service.oldPrice)}
                        </span>
                      </div>
                    ) : (
                      <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                        {t(service.currentPrice)}
                      </span>
                    )}
                  </div>
                )}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t(service.description)}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-sm leading-snug"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-1 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{t(feature)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Equipment Section */}
        <div className="relative rounded-2xl overflow-hidden max-w-6xl mx-auto mb-8">
          <div className="p-8 md:p-12 text-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent -mt-5">
              {t("services.equipment")}
            </h3>
            <p className="text-gray-200/80 text-xl md:text-2xl max-w-lg mx-auto mb-14">
              {t("services.weusethelatest")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
              <div className="relative rounded-2xl overflow-hidden w-full max-w-xs md:max-w-sm aspect-[4/3]">
                <img
                  src={droneImage}
                  alt="Drone Photography Equipment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden w-full max-w-xs md:max-w-sm aspect-[4/3]">
                <img
                  src={equipmentImage}
                  alt="Professional 360° Camera Equipment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden w-full max-w-xs md:max-w-sm aspect-[4/3]">
                <img
                  src={drone2Image}
                  alt="Additional Drone Equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;