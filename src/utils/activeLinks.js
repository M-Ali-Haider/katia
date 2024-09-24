export const activeLinks = [
  { title: "Home", id: "#home" },
  { title: "About Us", id: "#about" },
  { title: "Features", id: "#features" },
  { title: "Pricing", id: "#pricing" },
  { title: "Contact Us", id: "#contact" },
];

export const scrollToSection = (id) => {
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
