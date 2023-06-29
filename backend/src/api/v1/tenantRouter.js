const express = require('express');
const router = express.Router();
// import the controller function
const TenantController=require("backend/src/controllers/tenantController.js");

// create a tenant
router.post('/', TenantController.createTenant);

// get a tenant by tenant id
router.get('/:id', TenantController.getTenantById);

// update tenant by tenant id
router.put('/:id', TenantController.updateTenantById);

// delete tenant by tenant id
router.delete('/:id', TenantController.deleteTenantById);

module.exports = router;
