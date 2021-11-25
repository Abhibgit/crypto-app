const Coin = require("../models/coin");

module.exports = {
  index,
  show,
  new: newCoin,
  create,
  delete: deleteCoin,
  update: updateCoinPrice,
  edit: edit,
};

function index(req, res) {
  Coin.find({}, function (err, coins) {
    if (err) next(createError(500));
    res.render("coins/coins-index.ejs", { coins });
  });
}

function create(req, res) {
  const coin = new Coin({
    name: req.body.coinName,
    price: req.body.coinPrice,
    description: req.body.coinDescription,
  });

  coin.save(function (err) {
    if (err) return res.render("coins/new");
    res.redirect("/coins");
  });
}

function show(req, res) {
  Coin.findById(req.params.coinId, function (err, coin) {
    res.render("coins/coinDetails.ejs", { coin: coin });
  });
}

function deleteCoin(req, res) {
  console.log("deletecoin");
  console.log(req.params.coinId);
  Coin.findOneAndDelete({ _id: req.params.coinId }, function (error, coin) {
    console.log("deleted", coin);
    res.redirect("/coins");
  });
}

function newCoin(req, res) {
  res.render("coins/new.ejs");
}

function edit(req, res) {
  Coin.findById(req.params.coinId, function (err, coin) {
    res.render("coins/editCoin.ejs", { coin: coin });
  });
}

function updateCoinPrice(req, res) {
  console.log("updateCoinPrice");
  Coin.findById(req.params.coinId, function (err, coin) {
    console.log("insidecoin");
    console.log(req.body);
    coin
      .updateOne({
        price: req.body.newCoinPrice,
        description: req.body.newCoinDescription,
      })
      .then(function (success) {
        console.log("updated");
        res.redirect("/coins");
      });
  });

  //res.redirect("/coins");
}
