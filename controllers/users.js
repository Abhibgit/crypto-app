const User = require("../models/user");
const Coin = require("../models/coin");

module.exports = {
  index,
  show,
  new: newUser,
  create,
  // delete: deleteCoin,
  // update: updateCoinPrice,
  // edit: edit,
};

function index(req, res) {
  User.find({}, function (err, users) {
    if (err) next(createError(500));
    res.render("users/user-index.ejs", { users });
  });
}

// function show(req, res) {
//   User.findById(req.params.userId, function (err, user) {
//     res.render("users/userDetails.ejs", { user: user });
//   });
// }

function show(req, res) {
  User.findById(req.params.id)
    .populate("coin")
    .exec(function (err, user) {
      Coin.find({ _id: { $nin: user.coin } }, function (err, coins) {
        console.log(user);
        res.render("users/user-index.ejs", {
          user,
          coins,
        });
      });
    });
}

function newUser(req, res) {
  res.render("users/new.ejs");
}

function create(req, res) {
  console.log("create");
  const user = new User({
    name: req.body.userName,
    password: req.body.userPassword,
  });

  user.save(function (err) {
    if (err) return res.render("users/new");
    res.redirect("/users");
  });
}
