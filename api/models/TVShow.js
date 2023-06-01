const mongoose = require("mongoose");

const TVShowSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
    },
    genre: {
      type: String,
    },
    rating: {
      type: String,
    },
    cast: {
      type: Array,
    },
    director: {
      type: String,
    },
    year: {
      type: String,
    },
    duration: {
      type: String,
    },
    seasons: {
      type: String,
    },
    episodes: {
      type: Array,
    },
    poster: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TVShow", TVShowSchema);
