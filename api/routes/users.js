const router = require("express").Router();
const verify = require("../verifyToken");
const UserController = require("../controllers/UserController");

const userController = new UserController();

// Update User
router.put("/:id", verify, userController.updateUser);

// Delete User
router.delete("/:id", verify, userController.deleteUser);

// Get User
router.get("/find/:id", userController.getUser);

// Get All User
router.get("/", verify, userController.getAllUser);

// Get User Stats
router.get("/stats", userController.getStats);

module.exports = router;
