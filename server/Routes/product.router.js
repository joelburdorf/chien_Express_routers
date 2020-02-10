const express = requires('express');
const router = express.Router();

//Write two routes - to/product

//one GET (send back string)
router.get('/', (req, res) => {
    console.log('in / GET hit');
    res.send('response from /product GET request');
}); // end /product GET

//one POST (send back 200)
router.post('/', (req, res) => {
    console.log('in / POST hit', req.body);
    res.sendStatus(201);
}); // end /product POST

//export

module.exports = router;
