const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coinSchema = new Schema(
  {
    name: String,
    price: Number,
    description: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Coin", coinSchema);
