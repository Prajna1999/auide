const express = require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const session=require('express-session');
const passport=require('passport');

// error handler
const {errorHandler}=require("./src/middlewares/errorHandler");
const {setupPassport}=require('./src/middlewares/auth')
// import routers
const addressRouter=require('./src/api/v1/addressRouter');
const audioguideRouter=require('./src/api/v1/audioguideRouter');
const brandingRouter=require('./src/api/v1/brandingRouter');
const exhibitRouter=require('./src/api/v1/exhibitRouter');
const museumRouter=require('./src/api/v1/museumRouter');
const tenantRouter=require('./src/api/v1/tenantRouter');
const userRouter=require('./src/api/v1/userRouter');
const authRouter=require('./src/api/v1/authRouter');

require('dotenv').config();
const helmet=require('helmet');

// create an express app
const app=express();
app.use(helmet());
app.use(cors({
  methods:"GET, HEAD, PUT, PATCH, POST, DELETE",
  credentials:true,
}))

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(
  session({
      secret: 'your_session_secret',
      resave: false,
      saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

setupPassport();

app.get('/', (req, res, next) => {
  res.send({
      status: req.user ? true : "user not signed in"
  });
})

// routes implemented here
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/addresses', addressRouter);
app.use('/api/v1/audioguide', audioguideRouter);
app.use('/api/v1/branding', brandingRouter);
app.use('/api/v1/exhibits', exhibitRouter);
app.use('/api/v1/museuems', museumRouter);
app.use('/api/v1/tenants', tenantRouter);
app.use('/api/v1/users', userRouter);











// default route
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

