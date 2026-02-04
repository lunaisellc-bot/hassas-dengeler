document.addEventListener("keydown", (e) => {
  const container = document.querySelector(".magazine");
  if (!container) return;

  if (e.key === "ArrowDown") {
    container.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  }
  if (e.key === "ArrowUp") {
    container.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
  }
});
