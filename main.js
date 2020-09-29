class Vocabluary {
  constructor(cards) {
    this.cards = cards;
  }
  addCard(mainWordForm, noun, verb, adjective, syn, category) {
    //change passed vocabluary parameter
    const mainWord =
      mainWordForm === "noun"
        ? noun
        : mainWordForm === "verb"
        ? verb
        : adjective;
    if (
      this.cards.findIndex(
        (card) => card.wordForms[mainWordForm] === mainWord
      ) !== -1
    )
      throw new Error("this card is exist");
    let newCard = {
      mainWordForm,
      wordForms: { noun, verb, adjective },
      syn,
      category,
    };
    this.cards.push(newCard);
  }
  changeCategory(mainWord, newCategory) {

  }
}

let card1 = {
  mainWordForm: "noun",
  wordForms: {
    noun: "advance",
    verb: "advance",
    adjective: "advance",
  },
  syn: ["progress", "lend"],
  category: "familiar",
  //unknow, familiar, well-known
};

let initVocabluary = new Vocabluary([]);

initVocabluary.addCard(
  "noun",
  "advance",
  "advance",
  "advance",
  "progress",
  "familiar"
);

initVocabluary.addCard(
  "verb",
  undefined,
  "suppose",
  undefined,
  "say",
  "familiar"
);



console.log(initVocabluary);

//? add Set clsss behaviour
