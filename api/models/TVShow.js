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
    status: {
      type: String,
      default: null,
    },
    cast: {
      type: Array,
    },
    director: {
      type: String,
    },
    creator: {
      type: String,
      default: null,
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
