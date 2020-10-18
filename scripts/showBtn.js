//declaration
const showBtn = document.querySelector(".card__show-btn"),
  hint = document.querySelector(".card__hint");

  //main
showBtn.addEventListener("click", () => {
  showBtn.classList.add("hidden");
  hint.classList.remove("hidden");
});


window.storage = {}
window.storage.showBtn = showBtn;
window.storage.hint = hint;