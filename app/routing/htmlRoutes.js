

app.get("/", function (req, res) {
  res.send("Check one,two,three,four");
});


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
  });
module.exports;