const router = require("express").Router();
const verify = require("../verifyToken");
const EpisodeController = require("../controllers/EpisodeController");

const episodeController = new EpisodeController();

// Create
router.post("/", verify, episodeController.create);

// Delete
router.delete("/:id", verify, episodeController.delete);

// Get all
router.get("/", verify, episodeController.getAll);

// Get one
router.get("/find/:id", verify, episodeController.get);

module.exports = router;
