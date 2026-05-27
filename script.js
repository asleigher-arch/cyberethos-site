const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    faqItems.forEach((entry) => entry.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});
