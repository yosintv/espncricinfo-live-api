const express = require("express");
var cors = require('cors');
const PORT = process.env.port||'8080';
const app = express();
app.use(express.static("public"));
app.use(cors());

  app.use(require('./router/home'));
  app.use(require('./router/live'));
  app.use(require('./router/upcoming'));
  
// start the server listening for requests
app.listen(process.env.PORT || 8080, () => console.log("Server is running..."));