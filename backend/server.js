const express = require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const morgan=require('morgan');

require('dotenv').config();

// imorting routers
const museumRouter=require("./api/v1/museumRoutes");
const staffRoutes=require("./api/v1/staffRoutes");
const exhbitRoutes=require("./api/v1/exhibitRoutes");

const PORT=5001||process.env.PORT;


const app = express();


//handle cors
app.use(cors({
    origin:"http://127.0.0.1:5173"
}))

// middleware for parsing requrest bodies and logging
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'))


app.get('/', (req, res)=>{
    res.send("hello from the server 5001")
})

//mount the museum router at the /api/v1/museums path

app.use('/api/v1/museums', museumRouter);
app.use('/api/v1/staff', staffRoutes);
app.use('/api/v1/exhibit', exhbitRoutes);

//start the server
// 
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})


