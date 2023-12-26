import http from "mode:http";

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  switch (url) {
    case `/about`:
      switch (method) {
        case "GET":
          res.end("get in about");
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
