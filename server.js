const express = require("express");

const app = express();
app.use(express.static("public"));
const PORT = process.env.port||'8080';

  app.use(require('./router/home'));
  app.use(require('./router/live'));
  
// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));