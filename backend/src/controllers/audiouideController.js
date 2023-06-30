const Audioguide=require('../models').Audioguide;
const AudioguideController={
  // create a new Audioguide
  createAudioguide:async(req,res,next)=>{
    try{
      const audioguide=await Audioguide.create(req.body);
      res.status(201).send(audioguide)
    }catch(error){
      console.log(error);
      // call the next errorhandler middleware
      next(error);
    }
  },

  // get a Audioguide by id
  getAudioguideById:async(req,res,next)=>{
    try{
      const audioguide=await Audioguide.findByPk(req.params.id);
      res.status(200).send(audioguide)
    }catch(error){
      console.log(error);
      next(error);
    }
  },

  // update Audioguide by id
  updateAudioguideById:async(req,res,next)=>{
    try{
      await Audioguide.update(req.body, {
        where:{
          id:req.params.id
        }
      });
      res.status(200).send('Audioguide updated successfully');
      
    }catch(error){
      console.log(error);
      next(error);
    }
  },

  // delete Audioguide by id
  deleteAudioguideById:async(req,res,next)=>{
    try{
      await Audioguide.destroy({
        where:{
          id:req.params.id
        }
      });
      res.status(200).send('Audioguide deleted successfully');
    }catch(error){
      console.log(error);
      next(error);
    }
  }

  
};

module.exports=AudioguideController