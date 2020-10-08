//! need to check methods
console.log(`cards.js file was downloaded`);

window.storage = {}


class Card {
    constructor(
        mainWordForm,
        wordFormsArray,
        sentence,
        synArray,
    category,
    //known, familiar, unknown;
    imgName
  ) {
    this.mainWordForm = mainWordForm;
    this.wordForms = {
      noun: wordFormsArray[0],
      verb: wordFormsArray[1],
      adjective: wordFormsArray[2],
    };
    this.sentence = sentence;
    this.syn = synArray;
    this.category = category;
    this.img = imgName;
  }
  get mainWord() {
    return this.wordForms[this.mainWordForm];
  }
  changeCategory(newCategory) {
    this.category = newCategory;
  }

  //validation methods
  __isValid() {}
  __ismainWordFormValid() {}
  __isSentenceValid() {}
  __isCategoryValid() {
    return (
      ["familiar", "unknown", "known"].findIndex(
        (validValue) => validValue === this.category
      ) !== -1
    );
  }
}


window.storage.Card = Card