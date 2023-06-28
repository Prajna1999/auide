// Import the express module
const express = require('express');

// Create a new router
const router = express.Router();

// Define a POST route for creating a  new staff
router.post('/', (req, res) => {

  res.send('staff created!');
});

// get list of all staffs as an array
router.get('/', (req, res)=>{
    res.send('All staff returned!');
})

//get the details of a specified staff id
router.get('/:id', (req, res)=>{

    const {id}=req.params;

    res.send( `staff with ${id} returned!`);
})

//update a specific staff
router.put('/:id', (req,res)=>{
    const {id}=req.params;

    res.send(`staff with ${id} updated`);
})

//delete a staff tenant 
router.delete('/:id', (req, res)=>{
    const {id}=req.params;

    res.send(`staff with ${id} removed`);
})

// Export the router
module.exports = router;
