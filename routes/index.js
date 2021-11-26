var express = require("express");
var router = express.Router();
const path = require("path");

/* GET home page. */
router.get("/cmbCrypto", function (req, res) {
  res.render("index", { title: "Crypto App" });
});

router.get("/", function (req, res) {
  res.redirect("/cmbCrypto");
});

router.get("/donotpush", function (req, res) {
  res.render("end");
});

module.exports = router;
