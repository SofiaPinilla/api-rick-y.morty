const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema(
  {
    name: String,
    status:String,
    status: String,
    gender: String,
    image: String,
  },
  { timestamps: true }
);

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;
