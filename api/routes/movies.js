const router = require("express").Router();
const verify = require("../verifyToken");
const MovieController = require("../controllers/MovieController");

const movieController = new MovieController();

// Get
router.get("/find/:id", verify, movieController.getMovie);

// Get all
router.get("/", verify, movieController.getAllMovie);

// Get random
router.get("/random", verify, movieController.getRandomMovie);

// Create
router.post("/", verify, movieController.createMovie);

// Update
router.put("/:id", verify, movieController.updateMovie);

// Delete
router.delete("/:id", verify, movieController.deleteMovie);

module.exports = router;
