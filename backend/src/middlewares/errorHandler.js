const errorHandler=(err,req,res,next)=>{
  res.status(err.status|| 500);
  // add other error handlers

  res.json({
    message:err.message,
    status:false,
    error:err
  });
}

module.exports={
  errorHandler
}