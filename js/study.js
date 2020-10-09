console.log("study.js was loaded");

//Declare
//HTML elements
let noun = document.getElementById("noun"),
  verb = document.getElementById("verb"),
  adjective = document.getElementById("adjective"),
  sentence = document.getElementById("sentence"),
  synonymsBlock = document.getElementById("synonyms"),
  image = document.getElementById("image"),
  finishWritting = document.getElementById("finish");

let nextBTN = document.getElementById("next-btn");

//variables
let urlDB = "http://localhost:3000";

//http requests
fetch("http://localhost:3000\\cards")
  .then((response) => {
    return response.json();
  })
  .then((cards) => {
    fetch("http://localhost:3000\\studyDeck")
      .then((response) => {
        return response.json();
      })
      .then((arr) => {
        //add first card on page
        changeCard(cards[arr[0]]);
        //next btn for other cards
        let currCardIndex = 1;
        nextBTN.addEventListener("click", () => {
          if (currCardIndex === arr.length) {
            card.classList.add("hidden");
            nextBTN.classList.add("hidden");
            finishWritting.classList.remove("hidden");
          } else {
            changeCard(cards[arr[currCardIndex]]);
            currCardIndex++;
          }
        });
      });
  });

//change content function
function changeCard(cardObject) {
  hideContentApperShowBTN();
  changeCardHeader(cardObject);
  changeCardSentence(cardObject);
  changeCardSynonyms(cardObject);
  changeCardImage(cardObject);
  changeColor(cardObject);

  function hideContentApperShowBTN() {
    showBtn.classList.remove("hidden");
    hint.classList.add("hidden");
  }
  function changeColor(cardObject) {
    //changable elements
    //function setTheme(known, familiar, unknown) {}
    let firstLine = document.querySelector("#first-line"),
      secondLine = document.querySelector("#second-line"),
      header = document.querySelector("#header"),
      verbWrapper = document.querySelector("#verb-wrapper"),
      nounPretitle = document.querySelector("#noun-pretitle"),
      verbPretitle = document.querySelector("#verb-pretitle"),
      adjectivePretitle = document.querySelector("#adjective-pretitle"),
      mainWordInSentence = document.querySelector("#main-word-in-sentence"),
      synonyms = document.querySelectorAll("#synonym");
    // let changableElements = [
    //   card,
    //   firstLine,
    //   secondLine,
    //   header,
    //   verbWrapper,
    //   nounPretitle,
    //   verbPretitle,
    //   adjectivePretitle,
    // ];
    //category
    let category = cardObject.category;
    //main
    switch (category) {
      case "known":
        setTheme("known");
        break;
      case "familiar":
        setTheme("familiar");
        break;
      case "unknown":
        setTheme("unknown");
        break;
      default:
        break;
    }


    function setTheme(category) {
      let color1 = color2 = color3 = color4 = ''
      switch (category) {
        case "known":
          //ligth
          color1 = "rgba(140, 207, 170, 0.5)";
          //dark
          color2 = "rgba(5, 115, 139, 0.7)";
          //borders
          color3 = 'rgba(165, 241, 223, 1)';
          //pretitles
          color4 = 'rgba(165, 241, 223, 0.8)';
          //card
          card.setAttribute(
            "style",
            `background-color:${color1}; border-color:${color3};`
          );
          //header
          header.setAttribute(
            "style",
            `background-color: ${color2}; border-color:${color3};`
          );
          verbWrapper.setAttribute("style", `border-color: ${color3};`);
          nounPretitle.setAttribute("style", `color: ${color4}`);
          verbPretitle.setAttribute("style", `color: ${color4}`);
          adjectivePretitle.setAttribute("style", `color: ${color4}`);
          //main
          mainWordInSentence.setAttribute("style", `color: ${color2}`);
          synonyms.forEach((syn) => {
            syn.setAttribute("style", `color:${color2};`);
          });
          //lines
          firstLine.setAttribute("style", `background-color: ${color3};`); 
          secondLine.setAttribute("style", `background-color: ${color3};`);
          //image
          image.setAttribute("style", `border-color:${color3};`);
          break;
      case "familiar":
          //ligth
          color1 = "rgba(100, 147, 201, 0.5)";
          //dark
          color2 = "rgba(19, 5, 43, 0.7)";
          //borders
          color3 = 'rgba(170, 199, 225, 1)';
          //pretitles
          color4 = 'rgba(170, 199, 225, 0.8)';
          //card
          card.setAttribute(
            "style",
            `background-color:${color1}; border-color:${color3};`
          );
          //header
          header.setAttribute(
            "style",
            `background-color: ${color2}; border-color:${color3};`
          );
          verbWrapper.setAttribute("style", `border-color: ${color3};`);
          nounPretitle.setAttribute("style", `color: ${color4}`);
          verbPretitle.setAttribute("style", `color: ${color4}`);
          adjectivePretitle.setAttribute("style", `color: ${color4}`);
          //main
          mainWordInSentence.setAttribute("style", `color: ${color2}`);
          synonyms.forEach((syn) => {
            syn.setAttribute("style", `color:${color2};`);
          });
          //lines
          firstLine.setAttribute("style", `background-color: ${color3};`); 
          secondLine.setAttribute("style", `background-color: ${color3};`);
          //image
          image.setAttribute("style", `border-color:${color3};`);
          break;
        case "unknown":
          //ligth
          color1 = "rgba(255, 116, 159, 0.5)";
          //dark ?
          color2 = "rgba(57, 23, 113, 0.7)";
          //borders
          color3 = 'rgba(150, 34, 34, 1)';
          //pretitles
          color4 = 'rgba(150, 34, 34, 0.8)';
          //card
          card.setAttribute(
            "style",
            `background-color:${color1}; border-color:${color3};`
          );
          //header
          header.setAttribute(
            "style",
            `background-color: ${color2}; border-color:${color3};`
          );
          verbWrapper.setAttribute("style", `border-color: ${color3};`);
          nounPretitle.setAttribute("style", `color: ${color4}`);
          verbPretitle.setAttribute("style", `color: ${color4}`);
          adjectivePretitle.setAttribute("style", `color: ${color4}`);
          //main
          mainWordInSentence.setAttribute("style", `color: ${color2}`);
          synonyms.forEach((syn) => {
            syn.setAttribute("style", `color:${color2};`);
          });
          //lines
          firstLine.setAttribute("style", `background-color: ${color3};`); 
          secondLine.setAttribute("style", `background-color: ${color3};`);
          //image
          image.setAttribute("style", `border-color:${color3};`);
          break;
      }
    }
  }
  function changeCardHeader(cardObject) {
    noun.innerHTML = cardObject.wordForms.noun;
    verb.innerHTML = cardObject.wordForms.verb;
    adjective.innerHTML = cardObject.wordForms.adjective;
    //remove 'card__word-form--active' class
    [noun, verb, adjective].forEach((el) => {
      if (el.classList.contains("card__word-form--active"))
        el.classList.remove("card__word-form--active");
    });
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
      `<span class="card__main-word" id="main-word-in-sentence">${mainWord}</span>`
    );
  }
  function changeCardSynonyms(cardObject) {
    //remove previous synonyms
    while (synonymsBlock.children.length > 2) {
      synonymsBlock.removeChild(synonymsBlock.lastChild);
    }
    //add new synonyms
    let synonyms = cardObject.syn;
    let synonym;
    synonyms.forEach((syn) => {
      //create new p
      synonym = document.createElement("p");
      synonym.classList.add("card__synonym");
      synonym.setAttribute("id", "synonym");
      synonym.innerHTML = syn;
      //add p to synonymsBlock
      synonymsBlock.appendChild(synonym);
    });
  }
  function changeCardImage(cardObject) {
    let imageSrc = `assets/img/deckImages/${cardObject.img}`;
    image.setAttribute("src", imageSrc);
  }
}
