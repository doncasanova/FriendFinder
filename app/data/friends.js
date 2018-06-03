// import { stringify } from "querystring";

// Friends list (DATA)
// =============================================================
var friends = [
    {
        name: "Ahmed",
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
        compatNum: "25"
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
        compatNum: "37"
    }
];


var compatNum = 0
function getCompatNum() {
    var friendsGuesses = friends[2].scores;
    for (var i = 0; i < friendsGuesses.length; i++) {
        compatNum += friendsGuesses[i]
    }
    // console.log(friendsScore)
};

function compareScores() {
    var scoreList = [0];
    for (var i = 1; i < friends.length; i++) {
        test = (friends[i].compatNum);
        // console.log(test)
        scoreList.push(test);


    }
    var yourNum = (friends[0].compatNum); 
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
compareScores()
// yourMatch()


// var match = yourMatch(function() {
//     var yourNum = (friends[0].compatNum); 
//     smallestDiff = Math.abs(yourNum - scoreList[0]);
//     closest = 0; //index of the current closest number

//     for (i = 1; i < scoreList.length; i++) {
//         currentDiff = Math.abs(yourNum - scoreList[i]);
//         if (currentDiff < smallestDiff) {
//             smallestDiff = currentDiff;
//             closest = i;
//         }
//     }
//     console.log(scoreList[closest]);

// });

