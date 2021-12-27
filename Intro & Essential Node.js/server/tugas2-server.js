const http = require("http");

const server = http.createServer((req, res) => {
    url = require("url")
    const path = url.parse(req.url).pathname;
    if (path === "/about") {
      res.write("Welcome to about us page");
      res.end();
    } else if (path === "/contact") {
      res.write("Welcome to contact us page");
      res.end();
    } else {
      res.write("Hello World!");
      res.end();
    }
});

server.listen(8000, () => {
  console.log("Node server listened at port 8000");
});