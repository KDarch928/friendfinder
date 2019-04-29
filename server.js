var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

//set up ports
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//setting required routes

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener

app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});



