
var path = require("path");
//Loadin data - links to our data
var friendArray = require("../data/friends");

//Routing
module.exports = function(app) {

// GET Request gets data from 
    app.get("/api/friends", function(req, res) {
        res.json(friendArray);
        console.log(friendArray);
    });

//API POST Requests    
    app.post('/api/friends', function(req, res){

    //Pushes to friends data, finds match
            friendArray.push(req.body);
            res.json(friendArray);
    
        });
    }