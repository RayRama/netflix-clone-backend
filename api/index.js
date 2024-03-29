const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const listRoute = require("./routes/lists");
const movieRoute = require("./routes/movies");
const tvshowRoute = require("./routes/tvshows");
const episodeRoute = require("./routes/episodes");

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/lists", listRoute);
app.use("/api/movies", movieRoute);
app.use("/api/tvshows", tvshowRoute);
app.use("/api/episodes", episodeRoute);

app.listen(8080, () => {
  console.log("Backend server is running!");
});

module.exports = app;
