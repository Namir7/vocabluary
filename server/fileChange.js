let fs = require("fs");

//example 
let card = {
  mainWordForm: "verb",
  wordForms: {
    noun: "conclusion",
    verb: "conclude",
    adjective: "concluding",
  },
  syn: ["settle", "end"],
  category: "familiar",
};

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
    let newData ='';
  if (prevData.replace(/\s/g, "") === "[]") {
    newData = `[${JSON.stringify(object)}]`
  } else {
    newData = `[${prevData
      .replace(/\s/g, "")
      .slice(1, -1)},${JSON.stringify(object)}]`;
  }
  //add new value to file
  fs.writeFileSync(`${__dirname}\\dataBase.json`, newData, (err) => {
    if (err) throw err;
  });
}

