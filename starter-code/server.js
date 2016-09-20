// SERVER-SIDE JAVASCRIPT
// run npm install to install all required packages before starting server

var express = require('express');
var app = express();


// MIDDLEWARE
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Allow CORS:
// not necessary since we'll be making requests from a js file
  // that we are also serving (as static assets in public)
// app.use(function(request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// ROUTES
// Root Route
/* Create a root route that responds by sending the index.html file from the views directory. */
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});




// Gallery View Route


// The Number Guessing Game
/* Build a route that allows a user to guess a number through query
parameters (for example, /pickanumber?number=10).
The route should check the user's number against some target number variable
 stored in the server code. When the user navigates to this route in the browser,
 the server should respond with either "Too High", "Too Low" or "Nailed it!"
 For example, if the target number is 7, then a request to /pickanumber?number=10
 should trigger a response of 'Too High'.*/
app.get("/pickanumber", function (request, response) {
  var number = +request.query.number;
  var targetNum = 8;
  if (number == targetNum) {
    response.send("Nailed it!");
  } else if (number < targetNum) {
    response.send("Too low...");
  } else if (number > targetNum) {
    response.send("Too high...");
  } else {
    response.send("Hmm...not sure that's a number. Try again, goober.");
  }
});

// pickanumber#Create
app.post("/pickanumber", function (request, response) {
  var newTargetNum = +request.body.number;
  response.json(newTargetNum);
});

// Gallery


// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log('Server Running at localhost:3000/');
});
