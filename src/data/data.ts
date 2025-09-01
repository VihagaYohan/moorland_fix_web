import type { Service, Steps } from "../models/models";

const imageUrl = "../../assets/react.svg";

export const serviceList: Service[] = [
  {
    title: "House cleaning",
    description:
      "Professional cleaning for every corner of your home - spotless and stress free",
    imageUrl: imageUrl,
  },
  {
    title: "Gardening",
    description:
      "Keep your garden fresh and vibrant with expert maintenance and care.",
    imageUrl: imageUrl,
  },
  {
    title: "Plumbing",
    description:
      "Fast fixes for leaks, clogs, and installations to keep water flowing smoothly",
    imageUrl: imageUrl,
  },
  {
    title: "Electrical",
    description:
      "Safe and reliable electrical repairs, upgrades, and installations",
    imageUrl: imageUrl,
  },
  {
    title: "Painting",
    description:
      "Transform your walls with quality painting for a fresh new look",
    imageUrl: imageUrl,
  },
  {
    title: "General maintenance",
    description:
      "Reliable solutions for a wide range of household fixes and improvements",
    imageUrl: imageUrl,
  },
];

export const stepsList: Steps[] = [
  {
    number: "01",
    title: "Choose Service",
    description: "Pick the service you need — cleaning, plumbing, or more.",
    color: "bg-purple-100 text-purple-600 border-purple-400",
  },
  {
    number: "02",
    title: "Make Appointment",
    description: "Select your preferred date and available time slot.",
    color: "bg-cyan-100 text-cyan-600 border-cyan-400",
  },
  {
    number: "03",
    title: "We Get It Done",
    description: "Our professionals complete the job to your satisfaction.",
    color: "bg-orange-100 text-orange-600 border-orange-400",
  },
  {
    number: "04",
    title: "Enjoy Peace of Mind",
    description: "Relax knowing your home is in good hands.",
    color: "bg-blue-100 text-blue-600 border-blue-400",
  },
];
