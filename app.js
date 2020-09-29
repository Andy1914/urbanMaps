var express = require("express");
var bodyParser = require("body-parser");
// var routes = require("./routes");
var app = express();
var wiki = require('./src/maps/controller/maps_controller')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/V1/api/',wiki)

// routes(app);

var server = app.listen(3000, () =>{
    console.log("app running on port.", server.address().port);
});