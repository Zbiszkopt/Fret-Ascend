const http = require("http");
const app = require("./app"); // Importowanie ustawień serwera z pliku app.js

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});