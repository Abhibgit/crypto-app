var express = require("express");
var router = express.Router();
const coinFileCtrl = require("../controllers/coins");

router.get("/", coinFileCtrl.index);
router.get("/new", coinFileCtrl.new);
router.get("/:coinId", coinFileCtrl.show);
router.get("/:coinId/edit", coinFileCtrl.edit);
router.post("/", coinFileCtrl.create);
router.delete("/:coinId", coinFileCtrl.delete);
router.put("/:coinId", coinFileCtrl.update);

module.exports = router;
