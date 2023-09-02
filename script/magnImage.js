let images = document.querySelectorAll(".screen");
let overlay = document.getElementById("overlay");
let closeButton = document.getElementById("close-button");

images.forEach((el) => {
  el.addEventListener("click", () => {
    if (!el.classList.contains("magnImage")) {
      el.classList.toggle("magnImage");
      document.body.style.overflow = "hidden";
      overlay.style.display = "block";
      closeButton.style.display = "block";
    }
  });
});

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    images.forEach((el) => {
      if (el.classList.contains("magnImage")) {
        el.classList.remove("magnImage");
        overlay.style.display = "none";
        document.body.style.overflow = "auto";
        closeButton.style.display = "none";
      }
    });
  }
});

closeButton.addEventListener("click", () => {
  images.forEach((el) => {
    if (el.classList.contains("magnImage")) {
      el.classList.remove("magnImage");
      overlay.style.display = "none";
      document.body.style.overflow = "auto";
      closeButton.style.display = "none";
    }
  });
});
