
var friendsArray = require("../data/friends.js");

// console.log(friendsArray[0].name)

var friends = friendsArray


module.exports = {
function (app){

 // Displays all friends
 app.get("/api/friends", function (req, res) {
    return res.json(friends);
    // return (friends[1].scores);
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


}
}