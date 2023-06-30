const Address=require('../models/address');
const AddressController={
  // create a new Address
  createAddress:async(req,res,next)=>{
    try{
      const address=await Address.create(req.body);
      res.status(201).send(address)
    }catch(error){
      console.log(error);
      // call the next errorhandler middleware
      next(error);
    }
  },

  // get a Address by id
  getAddressById:async(req,res,next)=>{
    try{
      const address=await Address.findByPk(req.params.id);
      res.status(200).send(address)
    }catch(error){
      console.log(error);
      next(error);
    }
  },

  // update Address by id
  updateAddressById:async(req,res,next)=>{
    try{
      await Address.update(req.body, {
        where:{
          id:req.params.id
        }
      });
      res.status(200).send('Address updated successfully');
      
    }catch(error){
      console.log(error);
      next(error);
    }
  },

  // delete Address by id
  deleteAddressById:async(req,res,next)=>{
    try{
      await Address.destroy({
        where:{
          id:req.params.id
        }
      });
      res.status(200).send('Address deleted successfully');
    }catch(error){
      console.log(error);
      next(error);
    }
  }

  
};

module.exports=AddressController