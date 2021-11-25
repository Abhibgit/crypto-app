var express = require("express");
var router = express.Router();
const path = require("path");

/* GET home page. */
router.get("/cmbCrypto", function (req, res) {
  res.render("index", { title: "Crypto App" });
  // let coinsObject = {
  //   coins: coinsFile.getAll(),
  // };
  /*  todo display coin list
  res.render("coins-index.ejs", coinsObject);*/
});

router.get("/", function (req, res) {
  res.redirect("/cmbCrypto");
});

module.exports = router;
