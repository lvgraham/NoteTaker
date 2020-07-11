const express = require('express');
const store = require('../store');

const app = express();

app.get('/api/notes', (req,res) => {
    store.getNotes().then(notes => {
        return res.json(notes);
    }).catch(err => {
        return res.status(500).json(err);
    })
})

//post route to add /api/notes
//delete route to remove the notes /api/notes/:id

//html routes you only need 1 route to get the notes, 1 route to display the homepage.
