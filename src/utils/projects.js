import payments from "../images/payments.png";
import invoices from "../images/invoices.png";
import api from "../images/api-image.webp";

export const projects = [
  {
    title: "Products Payments Processor",
    image: payments,
    description:
      "Developed a full-stack application for product purchases with features like product listing, real-time stock updates, order summaries, and a simulated payment gateway for secure test transactions.",
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
      "Created an invoice management app with ReactJS and TailwindCSS, allowing users to register, edit, and delete tickets.",
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
    title: "REST API for Cats and Owners Management ",
    image: api,
    description:
      "Designed and implemented a scalable REST API using NestJS, TypeScript, and MongoDB, enabling seamless CRUD operations for managing cat and owner data.",
    link: "https://github.com/ricgomez99/Cats-Owners",
    tech: ["NestJS", "TypeScript", "MongoDB"],
  },
];
