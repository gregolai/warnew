// UNUSED
//require('daemon')();
console.log("HAI!");

var express = require("express"),
    app     = express(),
    port    = 8080;
    
app.get("/", function(req, res) {
  res.redirect("/index.html");
});

app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());

  app.use(express.static(__dirname));
  
  app.use(express.errorHandler({
    dumpExceptions: true, 
    showStack: true
  }));
  app.use(app.router);
});

app.listen(port);
