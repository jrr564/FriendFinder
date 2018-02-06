//Path package to get correct files
var path = require("path");

//Routing
module.exports = function(app) {
    //HTML Get Requests
    app.get("/home", function (req, res){
        res.sendFile(path.join(_dirname, "../app/public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(_dirname, "../app/public/survey.html"))
    };

    app.get("/*", function (req, res){
        res.sendFile(path.join(_dirname, "../app/public/home.html"));
    });


};
