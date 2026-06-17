document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const targetUrl = card.getAttribute("data-href");
      if (targetUrl) {
        window.location.href = targetUrl;
      }
    });
  });

  const prevBtn = document.querySelector(".previous-page-button-container button:first-child");
  const nextBtn = document.querySelector(".previous-page-button-container button:last-child");

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      window.history.back();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      window.history.forward();
    });
  }
});