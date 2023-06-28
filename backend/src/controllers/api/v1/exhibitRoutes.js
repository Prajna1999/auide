// Import the express module
const express = require('express');

// Create a new router
const router = express.Router();

// Define a POST route for creating a new museum tenant. 
router.post('/', (req, res) => {

  res.send('Exhibit created!');
});

// get list of all museums as an array
router.get('/', (req, res)=>{
    res.send('All exhbits returned');
})

//get the details of a specified musuem id
router.get('/:id', (req, res)=>{

    const {id}=req.params;

    res.send( `Exhibit with ${id} returned!`);
})

//update a specific museum
router.put('/:id', (req,res)=>{
    const {id}=req.params;

    res.send(`Exhibit with ${id} updated`);
})

//delete a museum tenant 
router.delete('/:id', (req, res)=>{
    const {id}=req.params;

    res.send(`Exhibit with ${id} removed`);
})

// Export the router
module.exports = router;