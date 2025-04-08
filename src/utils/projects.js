import payments from "../images/payments.png";
import invoices from "../images/invoices.png";
import api from "../images/api-image.webp";
import mobileApp from "../images/mobile-app.png";

export const projects = [
  {
    title: "Products Payments Processor",
    image: payments,
    description:
      "Full-stack app for product purchases with real-time stock updates, order summaries, and a test payment gateway.",
    link: "https://payment-processor-main.vercel.app/",
    tech: [
      "ReactJS",
      "NestJS",
      "MongoDB",
      "Mongoose",
      "TypeScript",
      "TailwindCSS",
    ],
  },
  {
    title: "Mobile Wars",
    image: mobileApp,
    description:
      "Mobile application that consumes the swapi API for rendering character, planets and films data",
    link: "https://github.com/ricgomez99/mobile-wars",
    tech: ["React Native", "TypeScript", "Expo"],
  },
  {
    title: "REST API for Cats & Owners",
    image: api,
    description:
      "Scalable REST API with NestJS, TypeScript, and MongoDB for managing cat and owner data.",
    link: "https://github.com/ricgomez99/Cats-Owners",
    tech: ["NestJS", "TypeScript", "MongoDB"],
  },
];
