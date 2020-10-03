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
    if (this._findCardIndex(mainWordForm) !== -1)
      throw new Error("this card is exist");
    let newCard = {
      mainWordForm,
      wordForms: { noun, verb, adjective },
      syn,
      category,
    };
    this.cards.push(newCard);
  }
  deleteCard(mainWord) {
    if (!this.isCardExist(mainWord)) throw new Error("this card doen't exist");
    this.cards.splice(
      this._findCardIndex(mainWord),
      this._findCardIndex(mainWord)
    );
  }
  changeCategory(mainWord, newCategory) {
    if (this._findCardIndex(mainWord) === -1)
      throw new Error(`this word doesn't exist`);
    this.cards[this._findCardIndex(mainWord)].category = newCategory;
  }
  isCardExist(mainWord) {
    return this._findCardIndex(mainWord) !== -1 ? true : false;
  }
  //private method
  _findCardIndex(mainWord) {
    //returns index if card exist else return -1
    return this.cards.findIndex(
      (card) => card.wordForms[card.mainWordForm] === mainWord
    );
  }
}

//example
const card1 = {
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

//test: added 'advance', 'suppose', 'beatiful'; deleted 'suppose'
{
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

  initVocabluary.addCard(
    "adjective",
    "beauty",
    undefined,
    "beautiful",
    "wonderful",
    "familiar"
  );
  initVocabluary.changeCategory("beautiful", "well-known");
  initVocabluary.deleteCard("suppose");
  initVocabluary.addCard(
    "verb",
    undefined,
    "suppose",
    undefined,
    "say",
    "familiar"
  );
}

console.log(initVocabluary);

//? take a  Set clsss behaviour
