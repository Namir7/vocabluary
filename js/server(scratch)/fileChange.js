let fs = require("fs");
const { get } = require("http");

//example
let card = {
  mainWordForm: "verb",
  wordForms: {
    noun: "conclusion",
    verb: "conclude",
    adjective: "concluding",
  },
  sentence: "they conclude their study with these words",
  syn: ["settle", "end"],
  category: "familiar",
};

//get db
let getBD = function () {
  return JSON.parse(
    fs.readFileSync(`${__dirname}\\dataBase.json`, `utf8`, (err, data) => {
      if (err) throw err;
      return data;
    })
  );
};

//get Card
let getCard = function (word) {
  let card = getBD().find((el) => el.wordForms[el.mainWordForm] === word);
  return card;
};

module.exports.getCard = getCard;

//function for add element to db
function addElementToDB(object) {
  //read bdatabase
  let prevData = fs.readFileSync(
    `${__dirname}\\dataBase.json`,
    `utf8`,
    (err, data) => {
      if (err) throw err;
      return JSON.parse(data);
    }
  );
  //create new data
  let newData = "";
  if (prevData.replace(/\s/g, "") === "[]") {
    newData = `[${JSON.stringify(object)}]`;
  } else {
    newData = `[${prevData.replace(/\s/g, "").slice(1, -1)},${JSON.stringify(
      object
    )}]`;
  }
  //add new value to file
  fs.writeFileSync(`${__dirname}\\dataBase.json`, newData, (err) => {
    if (err) throw err;
  });
}

//set inner value for HTML element
function setValueFromDB(elementHTML, word) {
  let card = serverScratch.getCard(word);
}

