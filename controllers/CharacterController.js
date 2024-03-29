const Character = require("../models/Character");

const CharacterController = {
  async create(req, res) {
    try {
      const character = await Character.create(req.body);
      res.status(201).send(character);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({
          message: "there was a problem trying to create the character",
        });
    }
  },
  async getAll(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const characters = await Character.find()
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(characters);
    } catch (error) {
      console.error(error);
    }
  },

  async getById(req, res) {
    try {
      const character = await Character.findById(req.params._id);
      res.send(character);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  async getProductsByName(req, res) {
    try {
      const name = new RegExp(req.params.name, "i");
      const characters = await Character.find({ name });
      res.send(characters);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  async delete(req, res) {
    try {
      const character = await Character.deleteOne({ _id: req.params._id });
      res.send({ character, message: "character deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "there was a problem trying to remove the character",
      });
    }
  }
};
module.exports = CharacterController;
