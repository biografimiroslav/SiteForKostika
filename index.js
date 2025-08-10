// Плавна поява при заході
const faqSection = document.querySelector(".faq-section");
const faqItems = document.querySelectorAll(".faq-item");

window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
  setTimeout(() => faqSection.classList.add("enter"), 120);
  setTimeout(
    () => document.querySelector("header").classList.add("enter"),
    220
  );

  const v = document.getElementById("bg-video");
  if (v) {
    v.play().catch((err) => {
      console.warn("Autoplay prevented:", err);
    });
  }
});

// Функція для відкриття/закриття FAQ
function toggleItem(item) {
  const q = item.querySelector(".faq-question");
  const isOpen = item.classList.contains("open");

  // Закриваємо всі
  faqItems.forEach((i) => {
    i.classList.remove("open");
    const btn = i.querySelector(".faq-question");
    if (btn) btn.setAttribute("aria-expanded", "false");
  });

  if (!isOpen) {
    item.classList.add("open");
    if (q) q.setAttribute("aria-expanded", "true");
  }
}

faqItems.forEach((item) => {
  const q = item.querySelector(".faq-question");
  if (!q) return;

  q.addEventListener("click", () => toggleItem(item));
  q.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      toggleItem(item);
    }
  });
});
