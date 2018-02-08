//Loadin data - links to our data
var friendData = require("../data/friends.js");


//Routing
module.exports = function(app) {

//API GET Requests
    app.get("/api/friends", function(req, res){
        console.log("get api working");
        res.json(friendData);
       console.log(friendData);
    });

// //API POST Requests    
    // app.post("/api/friends", function(req, res) {
    //    friendData.push(req.body); 
    //    res.json(true);
    // }); //post

} //app