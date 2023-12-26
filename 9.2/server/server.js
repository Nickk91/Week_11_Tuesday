// import http from "mode:http";
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  switch (url) {
    case "/page":
      switch (method) {
        case "GET":
          res.end("<h1>Welcome</h1>");
          return;
        default:
          console.log(`Sorry, you only can use GET`);
      }

    case "/users":
      switch (method) {
        case "GET":
          const users = fs.readFileSync("./src/users.json", "utf-8");
          console.log(users);
          res.end(users);
          return;
      }

    case "/":
      switch (method) {
        case "GET":
          const home = fs.readFileSync("./src/index.html", "utf-8");
          console.log(home);
          res.end(home);
          return;
      }

    case "/style.css":
      switch (method) {
        case "GET":
          const style = fs.readFileSync("./src/style.css", "utf-8");
          console.log(style);
          res.end(style);
          return;
        default:
          console.log(`Sorry, you only can use GET`);
      }
  }
});

server.listen(8081, () => {
  console.log("server listening on port 8081");
});
console.log("help");
