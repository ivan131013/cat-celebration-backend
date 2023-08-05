var express = require("express");
var router = express.Router();

var app = express();
var cors = require("cors");

let globalFCount = 0;



/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("PUSSy");
});

router.post("/f", (req, res, next) => {
  globalFCount++;
  res.json(globalFCount);
});

router.get("/f", (req, res, next) => {
  res.json(globalFCount);
});

module.exports = router;
