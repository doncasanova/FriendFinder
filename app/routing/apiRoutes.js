var path = require("path")
var friendsArray = require("../data/friends.js");
var compatNum = 0
// console.log('top of apiRoutes')

module.exports = function (app) {

  app.post("/api/friends", function (req, res) {

    req.body.compatNum = getCompatNum(req.body.scores)
    friendsArray.unshift(req.body)
    yourMatch(friendsArray)
    var friendMatch = friendsArray[closest + 1]
    console.log(friendMatch)

    res.json({ name: friendMatch.name, photo: friendMatch.photo });
  });

  //adds the total score of guest (compatNum)
  function getCompatNum(scores) {
    var total = 0;
    for (var i = 0; i < scores.length; i++) {
      total = total + parseInt(scores[i])

    }
    console.log("total = " + total)
    return total;


  }
  //Maches the guest total score (compatNum) to friends list.
  function yourMatch(friendsArray) {

    var yourNum = (friendsArray[0].compatNum);
    var scoreList = [];
    for (var i = 1; i < friendsArray.length; i++) {
      list = (friendsArray[i].compatNum);
      scoreList.push(list);
    }

    smallestDiff = Math.abs(yourNum - scoreList[1]);
    closest = 1; //index of the current closest number

    for (i = 1; i < scoreList.length; i++) {
      currentDiff = Math.abs(yourNum - scoreList[i]);
      if (currentDiff < smallestDiff) {
        smallestDiff = currentDiff;
        closest = i;

      }
    }
  }


  //----------------------------------------------------------------------------------
    // alternate method for comparing scores Written by Chuck Wessel.
  //----------------------------------------------------------------------------------


  // function findFriendMatch(scores) {
  //   var lowestDelta = 1000;
  //   var friendIndex = 0;
  //   // index = Math.floor(Math.random() * scores.length);
  //   for (var i = 0; i < friendsArray.length; i++) {
  //       var tempDelta = computeMatchProfileScore(scores, friendsArray[i].scores);
  //       // console.log("currIndex: " + i);
  //       // console.log("tempDelta: " + tempDelta);
  //       if (tempDelta < lowestDelta) {
  //           lowestDelta = tempDelta;
  //           friendIndex = i;
  //           // console.log("lowestDelta: " + lowestDelta);
  //       }
  //   }
  //   // console.log("friendIndex: " + friendIndex);
  //   return friendsArray[friendIndex];
  // }

  // function computeMatchProfileScore(arr1, arr2) {
  //   // console.log(arr1);
  //   // console.log(arr2);
  //   sumDelta = 0;
  //   for (var i = 0; i < arr1.length; i++) {
  //       sumDelta = sumDelta + (Math.abs(parseInt(arr1[i]) - parseInt(arr2[i])));
  //   }
  //   return sumDelta;
  // }


  //   app.post("/api/friends", function (request, response) {
  //     // console.log(request.body)
  //     var friendMatch = findFriendMatch(request.body.scores);
  //     console.log(friendMatch)
  //     response.json({ name: friendMatch.name, photo: friendMatch.photo });
  // });

}


