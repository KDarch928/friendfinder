//load data
var friendData = require("../data/friends");


function checkForBestMatch(ursArrScore) {
	var bestMatch;
	var totalDiff = 0;
	var newtotalDiff = 0;

	for(var i = 0; i < friendData.length; i++){
		for(j = 0; j < ursArrScore.length; j++){
			newtotalDiff += Math.abs(friendData[i].scores[j] - ursArrScore[j]);
		}
		if(totalDiff === 0) {
            totalDiff = newtotalDiff;
            bestMatch = friendData[i];
		} else if (totalDiff > newtotalDiff){
			totalDiff = newtotalDiff;
			bestMatch = friendData[i];
		}
		newtotalDiff = 0;

	}

	return bestMatch;

}

//routing

module.exports = function(app) {

	//get fucntion
	app.get("/api/friends", function(req, res){
		res.json(friendData);
	});

	//post (create new friends)
	app.post("/api/friends",function(req, res){

		var data = req.body;
		var newIntArr = [];

		for (var i = 0; i < data.scores.length; i++){
			newIntArr.push(parseInt(data.scores[i]));
		}

		var newUsrData = {
			name: data.name,
			photo: data.photo,
			scores: newIntArr
		}

		var bestMatch = checkForBestMatch(newIntArr);


		friendData.push(newUsrData);
        res.json(bestMatch);




	});

}
