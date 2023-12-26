const router = require("express").Router();
const verify = require("../verifyToken");
const ListController = require("../controllers/ListController");

const listController = new ListController();

// Create List
router.post("/", verify, listController.createList);

// Delete List
router.delete("/:id", verify, listController.deleteList);

// Get List
router.get("/", verify, listController.getList);

module.exports = router;
