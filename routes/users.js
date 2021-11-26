var express = require("express");
var router = express.Router();
const usersFileCtrl = require("../controllers/users");
const coinFileCtrl = require("../controllers/coins");

router.get("/", usersFileCtrl.index);
router.get("/new", usersFileCtrl.new);
router.get("/:userId", usersFileCtrl.show);
// router.get("/:userId/edit", usersFileCtrl.edit);
router.post("/", usersFileCtrl.create);
router.post("/:userId/coin", coinFileCtrl.addCoinToUser);
// router.delete("/:userId", usersFileCtrl.delete);
// router.put("/:userId", usersFileCtrl.update);

module.exports = router;
