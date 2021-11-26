const Coin = require("../models/coin");
const User = require("../models/user");

module.exports = {
  index,
  show,
  new: newCoin,
  create,
  delete: deleteCoin,
  update: updateCoinPrice,
  edit: edit,
  addCoinToUser: addCoinToUser,
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
  Coin.findById(req.params.coinId, function (err, coin) {
    coin
      .updateOne({
        price: req.body.newCoinPrice,
        description: req.body.newCoinDescription,
      })
      .then(function (success) {
        res.redirect("/coins");
      });
  });
}

function addCoinToUser(req, res) {
  console.log("addCoinToUser");
  User.findById(req.params.userId, function (err, user) {
    user.coin.push(req.body.coinId);
    user.save(function (err) {
      res.redirect(`/users/${user._id}`);
    });
  });
}
