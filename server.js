const express = require("express");

const app = express();
app.use(express.static("public"));

  app.use(require('./router/home'));
  app.use(require('./router/live'));
  
app.listen(8000,function(){
  console.log("server started on port 8000")
})