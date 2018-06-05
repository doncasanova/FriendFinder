
var path = require ("path")


module.exports = function(app) {

  console.log ('hello you are in the html route')
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};

// module.exports = {

// function(app){

// app.get("/", function (req, res) {
//   c
// });

//   app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "./app/public/survey.html"));
//   });
// }
// }