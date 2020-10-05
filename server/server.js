const { log } = require("console");
let fs = require("fs");

//create main files
let html = fs
  .readFileSync(__dirname + "\\..\\pages\\study\\study.html")
  .toString("utf8");

let css = fs
  .readFileSync(__dirname + "\\..\\pages\\study\\study.css")
  .toString("utf8");

let js = fs
  .readFileSync(__dirname + "\\..\\pages\\study\\js\\showBtn.js")
  .toString("utf8");

let img1 = fs.readFileSync(__dirname + "\\..\\assets\\img\\back-btn(blue).svg");

let img2 = fs.readFileSync(
  __dirname + "\\..\\assets\\img\\dragon-k-wallpaper.jpg"
);

//server
let http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  //routung for page 'study'
  switch (req.url) {
    case "/study":
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(html);
      break;
    case "/study.css":
      res.writeHead(200, { "Content-type": "text/css" });
      res.end(css);
      break;
    case "/js/showBtn.js":
      res.writeHead(200, { "Content-type": "text/js" });
      res.end(js);
      break;
    case "/assets/img/dragon-k-wallpaper.jpg":
      res.writeHead(200, { "Content-type": "image/jpg" });
      res.end(img2);
      break;
    case "/assets/img/back-btn(blue).svg":
      res.writeHead(200, { "Content-type": "image/svg+xml" });
      res.end(img1);
      break;
    default:
      res.writeHead(404, { "Content-type": "text/plain" });
      res.end("404 Not found");
      break;
  }
});

server.listen(3000, () => {
  console.log("Server is listening");
});
