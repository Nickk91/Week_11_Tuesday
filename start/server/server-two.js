// import http from "mode:http";
import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import * as http from "node:http";

//inside one endpoint (ie url +method) serve html page
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  switch (url) {
    case `/about`:
      switch (method) {
        case "GET":
          try {
            const htmlFile = readFileSync("./src/index.html", "utf-8");
            res.writeHead(200, { "Content-Type": "text/htm" });
            res.end(htmlFile);
          } catch (error) {
            console.error("Error reading file:", error);
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal Server Error");
          }
          return;

        case "DELETE":
          res.end("delete in about");
          return;
      }

      res.end("hi from about");
      return;

    case `/video`:
      res.end("hi from video");
      return;
  }
});

server.listen(4545, () => {
  console.log("server listening on port 4545");
});
