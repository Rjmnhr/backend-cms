const mongoose = require("mongoose");

const FeaturedSchema = mongoose.Schema({
  headline: {
    type: String,
  },
  desc: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Featured", FeaturedSchema);
