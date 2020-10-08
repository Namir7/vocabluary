//!use npm json-server
console.log("study.js was loaded");


//download Card class from js/card.js
//when DOM was loaded
window.addEventListener("DOMContentLoaded", () => {
  let Card = window.storage.Card;
  // let card1 = new Card(
  //   "verb",
  //   ["decision", "decide", "deciding"],
  //   "I'll make the decision on my own",
  //   ["settle", "end"],
  //   "known",
  //   "conclude.jpg"
  // );
});


//main declaration
let urlDB = "http://localhost:3000/cards",
  noun = document.getElementById("noun"),
  verb = document.getElementById("verb"),
  adjective = document.getElementById("adjective"),
  sentence = document.getElementById("sentence");


//event listenter if page loaded
window.addEventListener("DOMContentLoaded", () => {
  getJSON(urlDB, changeCard);
});

//get JSON from DB
function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(`got data`);
      callback(JSON.parse(xhr.responseText)[0]);
    }
  };
}

//change card header
function changeCardHeader(cardObject) {
  noun.innerHTML = cardObject.wordForms.noun;
  verb.innerHTML = cardObject.wordForms.verb;
  adjective.innerHTML = cardObject.wordForms.adjective;
  switch (cardObject.mainWordForm) {
    case "noun":
      noun.classList.add("card__word-form--active");
      break;
    case "verb":
      verb.classList.add("card__word-form--active");
      break;
    case "adjective":
      adjective.classList.add("card__word-form--active");
      break;
    default:
      break;
  }
}

function changeCardSentence(cardObject) {
  let mainWord = cardObject.wordForms[cardObject.mainWordForm];
  sentence.innerHTML = cardObject.sentence.replace(
    mainWord,
    `<span class="card__main-word">${mainWord}</span>`
    //   <span class="card__main-word"></span>
  );
}

function changeCard(cardObject) {
  changeCardHeader(cardObject);
  changeCardSentence(cardObject);
}
