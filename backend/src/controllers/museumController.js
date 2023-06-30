const Museum=require('../models/museum');
const MuseumController={
  // create a new Museum
  createMuseum:async(req,res,next)=>{
    try{
      const museum=await Museum.create(req.body);
      res.status(201).send(museum)
    }catch(error){
      console.log(error);
      // call the next errorhandler middleware
      next(error);
    }
  },

  // get a Museum by id
  getMuseumById:async(req,res,next)=>{
    try{
      const museum=await Museum.findByPk(req.params.id);
      res.status(200).send(museum)
    }catch(error){
      console.log(error);
      next(error);
    }
  },

  // update Museum by id
  updateMuseumById:async(req,res,next)=>{
    try{
      await Museum.update(req.body, {
        where:{
          id:req.params.id
        }
      });
      res.status(200).send('Museum updated successfully');
      
    }catch(error){
      console.log(error);
      next(error);
    }
  },

  // delete Museum by id
  deleteMuseumById:async(req,res,next)=>{
    try{
      await Museum.destroy({
        where:{
          id:req.params.id
        }
      });
      res.status(200).send('Museum deleted successfully');
    }catch(error){
      console.log(error);
      next(error);
    }
  }

  
};

module.exports=MuseumController