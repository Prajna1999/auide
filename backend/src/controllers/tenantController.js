const Tenant=require('../models').Tenant;
const TenantController={
  // create a new tenant
  createTenant:async(req,res,next)=>{
    try{
      const tenant=await Tenant.create(req.body);
      res.status(201).send(tenant)
    }catch(error){
      console.log(error);
      // call the next errorhandler middleware
      next(error);
    }
  },

  // get a tenant by id
  getTenantById:async(req,res,next)=>{
    try{
      const tenant=await Tenant.findOne({
        where:{
          id:req.params.id
        },
        
      });
      res.status(200).json(tenant);
    }catch(error){
      console.log(error);
      next(error);
    }
  },

  // update tenant by id
  updateTenantById:async(req,res,next)=>{
    try{
      await Tenant.update(req.body, {
        where:{
          id:req.params.id
        }
      });
      res.status(200).send('Tenant updated successfully');
      
    }catch(error){
      console.log(error);
      next(error);
    }
  },

  // delete tenant by id
  deleteTenantById:async(req,res,next)=>{
    try{
      await Tenant.destroy({
        where:{
          id:req.params.id
        }
      });
      res.status(200).send('Tenant deleted successfully');
    }catch(error){
      console.log(error);
      next(error);
    }
  }

  
};

module.exports=TenantController