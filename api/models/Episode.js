const mongoose = require("mongoose");

const EpisodeSchema = new mongoose.Schema(
  {
    tvShowId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    seasonNumber: {
      type: Number,
      required: true,
    },
    episodeNumber: {
      type: Number,
      required: true,
    },
    releaseDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Episode", EpisodeSchema);
