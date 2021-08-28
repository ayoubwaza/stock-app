const mongoose = require("mongoose");
const GiantGelStock = new mongoose.Schema(
  {
    stockValue: {
      type: Number,
    },
    added: {
      type: Number,
    },
    minus: {
      type: Number,
    },
    routurn: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("giantStock", GiantGelStock);
