//load data
var friendData = require("../data/friends");

//routing

moudle.exports = function(app) {

	//get fucntion
	app.get("/api/friends", function(req, res){
		res.json(friendData);
	});

	//post (create new friends)
	app.post("/api/friends",function(req, res){

	});

}
