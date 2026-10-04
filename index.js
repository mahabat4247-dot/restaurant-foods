const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const filePath = path.join(__dirname, "public", "index.html");

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });

    return;
  }

  if (req.url === "/style.css") {
    const filePath = path.join(__dirname, "public", "style.css");

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("CSS file not found");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    });

    return;
  }

  if (req.url === "/script.js") {
    const filePath = path.join(__dirname, "public", "script.js");

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("JavaScript file not found");
        return;
      }

      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.end(data);
    });

    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Page not found");
});

server.listen(PORT, () => {
  console.log("Restaurant Foods is running on port " + PORT);
});
