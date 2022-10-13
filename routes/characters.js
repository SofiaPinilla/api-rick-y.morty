const express = require("express");
const CharacterController = require("../controllers/CharacterController");
const router = express.Router();

router.post("/", CharacterController.create);
router.get("/", CharacterController.getAll);
router.get("/id/:_id", CharacterController.getById);
router.get("/search/:name", CharacterController.getProductsByName);
router.delete("/id/:_id", CharacterController.delete);
router.put("/id/:_id",  CharacterController.update);
module.exports = router;
