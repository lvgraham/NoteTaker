const express = require('express');
const store = require('../js/store');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/notes', (req,res) => {
    store.getNotes().then(notes => {
        return res.json(notes);
    }).catch(err => {
        return res.status(500).json(err);
    })
})

//post route to add /api/notes
app.post("/api/characters", (req, res) => {
   
});


//delete route to remove the notes /api/notes/:id
app.delete('/api/notes/:id', (req, res) => {
    res.removeNote()
})

//html routes you only need 1 route to get the notes, 1 route to display the homepage.


//write api & html routes to use the methods in this store so that when it gets requests it will know what to do.