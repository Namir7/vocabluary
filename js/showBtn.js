const showBtn = document.querySelector(".card__show-btn"),
  hint = document.querySelector(".card__hint");

showBtn.addEventListener("click", () => {
  showBtn.setAttribute("style", "display:none");
  hint.setAttribute("style", "display:block");
});
