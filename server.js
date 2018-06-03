var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// require("app/routing/htmlRoutes.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var friends = [
  {
    name: "Ahmed1",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ],
    compatNum: "32"
  },
  {
    name: "Ahmed2",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [
      5,
      3,
      4,
      5,
      5,
      2,
      2,
      5,
      4,
      1
    ],
    compatNum: "36"
  },
  {
    name: "Ahmed3",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      1,
      1,
      1
    ],
    compatNum: "25"
  }
];



app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});


app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});


// Displays all friends
app.get("/api/friends", function (req, res) {
  return res.json(friends[1].scores);
  // return (friends[1].scores);
});


// Listener
// ===========================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

app.get("/your/friends", function (req, res) {
  var yourNum = (friends[0].compatNum);
  var scoreList = [0];
  for (var i = 1; i < friends.length; i++) {
    test = (friends[i].compatNum);
    // console.log(test)
    scoreList.push(test);


  }

  smallestDiff = Math.abs(yourNum - scoreList[0]);
  closest = 0; //index of the current closest number

  for (i = 1; i < scoreList.length; i++) {
    currentDiff = Math.abs(yourNum - scoreList[i]);
    if (currentDiff < smallestDiff) {
      smallestDiff = currentDiff;
      closest = i;

    }
    var yourFriend = closest
  }


  // console.log('This is your number  ' + yourNum)
  // console.log("This is your match  " + scoreList[closest]);
  // console.log("This is your match  " + friends[yourFriend]);

  return res.json(friends[yourFriend].photo);
  // return (friends[1].scores);
});

function compareScores() {
  var scoreList = [0];
  for (var i = 1; i < friends.length; i++) {
    test = (friends[i].compatNum);
    // console.log(test)
    scoreList.push(test);


  }

  smallestDiff = Math.abs(yourNum - scoreList[0]);
  closest = 0; //index of the current closest number

  for (i = 1; i < scoreList.length; i++) {
    currentDiff = Math.abs(yourNum - scoreList[i]);
    if (currentDiff < smallestDiff) {
      smallestDiff = currentDiff;
      closest = i;

    }
    var yourFriend = closest
  }


  console.log('This is your number  ' + yourNum)
  console.log("This is your match  " + scoreList[closest]);
  console.log("This is your match  " + friends[yourFriend]);
};
