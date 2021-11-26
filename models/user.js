const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    password: String,
    coin: [{ type: Schema.Types.ObjectId, ref: "Coin" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
