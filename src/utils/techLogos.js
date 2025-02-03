export const techLogos = Array.from({ length: 9 }, (_, index) => ({
  id: index + 1,
  src: [
    "react-logo",
    "nodejs-logo",
    "express-logo",
    "nestjs-logo",
    "javascript-logo",
    "typescript-logo",
    "tailwindcss-logo",
    "astro-logo",
    "mongodb-logo",
  ][index],
  delay: `${(20 / 9) * (8 - index) * -1}s`,
}));
