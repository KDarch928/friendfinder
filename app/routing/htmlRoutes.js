//required packages
var path = require("path");

//Routing

module.exports = function(app){
	
	//get survey rounts
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	//default route	
	app.get("*", function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
};