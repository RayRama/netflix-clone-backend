const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
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
    poster: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
