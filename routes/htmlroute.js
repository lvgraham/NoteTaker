
const path = require('path');
const express = require('express');

const htmlRoute = express.Router(); 

//show index.html at '/' endpoint
htmlRoute.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../public/index.html")); 
}); 

//show notes html at '/notes' endpoint
htmlRoute.get('/notes', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../public/notes.html")); 
}); 





module.exports = htmlRoute; 