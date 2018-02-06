//Loadin data - links to our data
var friendData = require("../data/friends");

//Routing

module.exports = function(app) {

//API GET Requests
    app.get("/api/friendArray", function(req, res){
        res.json(friendData);
    });

// //API POST Requests    
    app.post("/api/friends", function(req, res) {
       friendData.push(req.body); 
    }); //post

} //app