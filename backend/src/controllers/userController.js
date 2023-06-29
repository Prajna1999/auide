const  User  = require('../models/user');

const UserController = {
  // Create a new user
  createUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  // Get a user by ID
  getUser: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  // Update a user by ID
  updateUser: async (req, res) => {
    try {
      await User.update(req.body, {
        where: {
          id: req.params.id
        }
      });
      res.status(200).send('User updated successfully');
    } catch (error) {
      res.status(500).send(error);
    }
  },

  // Delete a user by ID
  deleteUser: async (req, res) => {
    try {
      await User.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(200).send('User deleted successfully');
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

module.exports = UserController;
