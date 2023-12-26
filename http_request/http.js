const https = require("https");
url = "https://catfact.ninja/fact";

const request = https.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    try {
      const body = JSON.parse(data);
      console.log(body);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  });
});

request.end();
