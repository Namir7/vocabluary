//1)
//be careful with __isSentenceValid()
//with first line in function: if(sentence === '') return true;
//It's made for create new Card instance without
//specified parametr in constructor


//2)
//need to add some features for __isSentenceValid: need to check 
//word forms in past simple, present perfect,  etc.


class Card {
  constructor(
    mainWordForm = "noun",
    wordFormsArray = [null, null, null],
    sentence = "",
    synArray = [],
    category = "unknown",
    imgUrl = "default.jpg"
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
    this.img = imgUrl;
    //validation
    //main word form
    if (!this.__isPartOfSpeechValid(mainWordForm)) {
      throw new Error(`inappropriate part of speech`);
    }
    //header words
    else if (wordFormsArray.some((word) => !this.__isWordValid(word))) {
      throw new Error(`inappropriate words`);
    } else if (
      !(Array.isArray(wordFormsArray) && wordFormsArray.length === 3)
    ) {
      throw new Error(`inappropriate array of header's words`);
    }
    //sentence
    else if (!this.__isSentenceValid(sentence)) {
      throw new Error(`inappropriate sentence value`);
    }
    // synonyms
    else if (this.syn.some((synonym) => !this.__isWordValid(synonym))) {
      throw new Error(`inappropriate synonyms value`);
    }
    else if(this.syn.length > 7){
      throw new Error(`more than 7 synonyms`)
    }
    //category
    else if (!this.__isCategoryValid(category)) {
      throw new Error(`inappropriate category`);
    }
    //image
    else if (!this.__isImageUrlValid(imgUrl)) {
      throw new Error(`inappropriate image url`);
    }
  }
  //retrive nethods
  get mainWord() {
    return this.wordForms[this.mainWordForm];
  }
  //change methods
  changeHeaderWord(newWord, partOfSpeech = this.mainWordForm) {
    if (
      !this.__isWordValid(newWord) ||
      !this.__isPartOfSpeechValid(partOfSpeech)
    )
      throw new Error(`inappopriate word or a part of speech`);
    else this.wordForms[partOfSpeech] = newWord;
  }
  changeMainWordForm(partOfSpeech) {
    if (!this.__isPartOfSpeechValid(partOfSpeech))
      throw new Error(`inappropriate part of speech`);
    else this.mainWordForm = partOfSpeech;
  }
  changeSentence(newSentence) {
    if (!this.__isSentenceValid(newSentence))
      throw new Error(`inappropriate sentence`);
    else this.sentence = newSentence;
  }
  //synonyms
  deleteSynonym(synonym) {
    if (this.syn.includes(synonym))
      this.syn.splice(this.syn.indexOf(synonym), 1);
  }
  addSynonym(synonym) {
    if (!this.__isWordValid(synonym))
      throw new Error(`inappropriate synonym value`);
    else if(this.syn.length > 7) {
      throw new Error(`more than 7 synonyms`)
    } else this.syn.push(synonym);
  }
  //
  changeCategory(newCategory) {
    if (!this.__isCategoryValid(newCategory))
      throw new Error(`inappropriate category value`);
    else this.category = newCategory;
  }
  changeImageUrl(newImageUrl) {
    if (!this.__isImageUrlValid(newImageUrl))
      throw new Error(`inappropriate image url`);
    else this.img = newImageUrl;
  }
  //validation methods
  __isWordValid(word) {
    if (word === null) return true;
    if (word.length >= 15) return false;
    return /\w*/.test(word);
  }
  __isPartOfSpeechValid(partOfSpeech) {
    if (
      partOfSpeech !== "noun" &&
      partOfSpeech !== "verb" &&
      partOfSpeech !== "adjective"
    )
      return false;
    else return true;
  }
  __isSentenceValid(sentence) {
    if (sentence === "") return true;
    if (sentence.length >= 75) return false;
    let appropriateSentence = new RegExp(
      `[\w*\s*,]*${this.mainWord}[\w*\s*,]*`
    );
    return appropriateSentence.test(sentence);
  }
  __isCategoryValid(category) {
    if (
      category !== "known" &&
      category !== "familiar" &&
      category !== "unknown"
    )
      return false;
    else return true;
  }
  __isImageUrlValid(url) {
    let appropriateImageUrl = new RegExp(`\w*\.(jpg|svg|raw|gif|png)$`);
    return appropriateImageUrl.test(url);
  }
}

let card = new Card(
  "verb",
  ["notation", "notice", "noticeable"],
  "It's good that you've noticed this",
  ["see", "whatch"],
  "familiar",
  "notice.jpg"
);

console.log(card);
