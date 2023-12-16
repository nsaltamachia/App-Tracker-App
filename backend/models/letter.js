const mongoose = require("mongoose");

const letterSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
});

const Letter = mongoose.model("Letter", letterSchema);
module.exports = Letter;
