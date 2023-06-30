const  Branding  = require('../models').Branding;

const BrandingController = {
  // Create a new Branding
  createBranding: async (req, res) => {
    try {
      const branding = await Branding.create(req.body);
      res.status(201).send(branding);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  // Get a Branding by ID
  getBranding: async (req, res) => {
    try {
      const branding = await Branding.findByPk(req.params.id);
      res.status(200).send(branding);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  // Update a Branding by ID
  updateBranding: async (req, res) => {
    try {
      await Branding.update(req.body, {
        where: {
          id: req.params.id
        }
      });
      res.status(200).send('Branding updated successfully');
    } catch (error) {
      res.status(500).send(error);
    }
  },

  // Delete a Branding by ID
  deleteBranding: async (req, res) => {
    try {
      await Branding.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(200).send('Branding deleted successfully');
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

module.exports = BrandingController;
