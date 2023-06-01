const router = require("express").Router();
const verify = require("../verifyToken");
const TVShowController = require("../controllers/TVShowController");

const tvShowController = new TVShowController();

// Create
router.post("/", verify, tvShowController.create);

// Get
router.get("/find/:id", verify, tvShowController.get);

// Get All
router.get("/", verify, tvShowController.getAll);

// Get Random
router.get("/random", verify, tvShowController.getRandom);

// Update
router.put("/:id", verify, tvShowController.update);

// Delete
router.delete("/:id", verify, tvShowController.delete);

module.exports = router;
