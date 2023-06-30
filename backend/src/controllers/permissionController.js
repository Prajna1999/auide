const Permission=require('../models/Permission');
const PermissionController={
  createPermission:async(req,res,next)=>{
    try{
      const permission=await Permission.create(req.body);
      res.status(200).send(permission);
    }catch(error){
      console.log(error);
      next(error)
    }
  },
  //get userpermissions for a particular userid
  //app.get('/api/v1/permissions/:userId', PermissionController.getUserPermissions);


   getUserPermission:async(req,res,next)=>{
      try{
        const permissions=await Permission.findAll({
          where:{
            UserId:req.params.userId
          }
        });

        res.status(201).send(permissions)
      }catch(error){
        console.log(error);
        next(error);
      }
    }
  }
module.exports=PermissionController;