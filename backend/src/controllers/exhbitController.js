const Exhibit=require('../models/exhibit');
const ExhibitController={
  // create a new Exhibit
  createExhibit:async(req,res,next)=>{
    try{
      const exhibit=await Exhibit.create(req.body);
      res.status(201).send(exhibit)
    }catch(error){
      console.log(error);
      // call the next errorhandler middleware
      next(error);
    }
  },

  // get a Exhibit by id
  getExhibitById:async(req,res,next)=>{
    try{
      const exhibit=await Exhibit.findByPk(req.params.id);
      res.status(200).send(exhibit)
    }catch(error){
      console.log(error);
      next(error);
    }
  },

  // update Exhibit by id
  updateExhibitById:async(req,res,next)=>{
    try{
      await Exhibit.update(req.body, {
        where:{
          id:req.params.id
        }
      });
      res.status(200).send('Exhibit updated successfully');
      
    }catch(error){
      console.log(error);
      next(error);
    }
  },

  // delete Exhibit by id
  deleteExhibitById:async(req,res,next)=>{
    try{
      await Exhibit.destroy({
        where:{
          id:req.params.id
        }
      });
      res.status(200).send('Exhibit deleted successfully');
    }catch(error){
      console.log(error);
      next(error);
    }
  }

  
};

module.exports=ExhibitController