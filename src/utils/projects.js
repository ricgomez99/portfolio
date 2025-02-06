import payments from "../images/payments.png";
import invoices from "../images/invoices.png";
import api from "../images/api-image.webp";

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
    title: "Tickets Manager",
    image: invoices,
    description:
      "Full-stack app for registering, editing, and deleting tickets.",
    link: "https://github.com/ricgomez99/invoiceApp",
    tech: [
      "ReactJS",
      "Node",
      "Express",
      "MongoDB",
      "Mongoose",
      "JavaScript",
      "TailwindCSS",
      "JWT",
    ],
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
