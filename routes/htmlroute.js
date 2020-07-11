//html routes you only need 1 route to get the notes, 1 route to display the homepage.

const path = require('path');
const express = require('express');

const htmlRoute = express.Router(); 


htmlRoute.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../public/index.html")); 
}); 

htmlRoute.get('/notes', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../public/notes.html")); 
}); 

module.exports = htmlRoute; 