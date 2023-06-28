const express = require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const {errorHandler}=require("./src/middlewares/errorHandler")
require('dotenv').config();
const helmet=require('helmet');

// create an express app
const app=express();
app.use(helmet());
app.use(cors({
  methods:"GET, HEAD, PUT, PATCH, POST, DELETE",
  credentials:true,
}))

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// routes implemented here









//default route
app.get('/', (req,res)=>{
  res.send("Hello from express application");
})
// catch route not found error
app.use((req,res,next)=>{
  const err=new Error('Route not found');
  err.status=404;
  next(err);
});


app.use(errorHandler);

// start the server
const PORT=process.env.PORT||5001;

app.listen(PORT, ()=>{
  console.log(`Server started on port ${PORT}`);
})

