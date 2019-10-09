var express = require("express");
var app = express();
app.listen(8080);
var axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
var CircularJSON = require("circular-json");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/API", (req, res) => {
  var data = req.body;
  //   console.log(req);
  //   axios
  //     .get(
  //       "https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query=spider"
  //     )
  //     .then(response => {
  //       //   console.log("entered");
  //       console.log(response);
  //       return (data = res);
  //       //   var data1 = CircularJSON.stringify(response.data);
  //       //   data1 = JSON.parse(data1);
  //       //   res.json(data1);
  //     });
  //   var data1 = CircularJSON.stringify(response.data);
  //   data1 = JSON.parse(data1);
  //   res.json(data1);
  axios
    .get("http://www.mocky.io/v2/5d958fe6330000ff112f8a0b")
    .then(response => {
      var data1 = CircularJSON.stringify(response.data);
      data1 = JSON.parse(data1);
      res.json(data1);
    })
    .catch(error => {
      res.status(500);
      res.send(error);
    });
});cd 
cd 