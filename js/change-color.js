//category buttons
const categoryWellKnown = document.getElementById("category__btn--well-known");
const categoryNeedToLearn = document.getElementById(
  "category__btn--need-to-learn"
);
const categoryUnknown = document.getElementById("category__btn--unknown");

//card
let card = document.querySelector(".card"),
cardHeader = document.querySelector(".card__word-forms"),
line1 = document.querySelector(".card__sentence-line"),
line2 = document.querySelector(".card__synonym-line"),
synonyms = document.querySelector('.card__synonym');


categoryWellKnown.addEventListener("click", () => {
  card.setAttribute(
    "style",
    "background-color: rgba(172, 254, 215, 0.5); border-color: rgba(165, 241, 223, 1)"
  );
    line1.setAttribute('style', 'background-color: rgba(165, 241, 223, 1)');
    line2.setAttribute('style', 'background-color: rgba(165, 241, 223, 1)');
});
categoryNeedToLearn.addEventListener("click", () => {
    card.setAttribute(
        "style",
        "background-color:rgba(100, 147, 201, 0.5); border-color: rgba(170, 199, 225, 1)"
        );
        line1.setAttribute('style', 'background-color: rgba(170, 199, 225, 1)');
        line2.setAttribute('style', 'background-color: rgba(170, 199, 225, 1)');
    });
    categoryUnknown.addEventListener("click", () => {
        card.setAttribute(
            "style",
            "background: rgba(245, 194, 219, 0.5); border-color: rgba(105, 53, 53, 1)"
            );
            line1.setAttribute('style', 'background-color: rgba(105, 53, 53, 1)');
            line2.setAttribute('style', 'background-color: rgba(105, 53, 53, 1)');
});

console.log(card.getAttribute("style"));


