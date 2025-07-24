// utils/utils.js
export const slugify = (text = "") =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // remove special chars
    .replace(/\s+/g, "-"); // replace spaces with hyphens
export const handleScroll = (linkId) => {
  const targetSection = document.getElementById(linkId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
};
export const truncateArticle = (str) => {
  return str.split(" ").slice(0, 20).join(" ") + "...";
};
