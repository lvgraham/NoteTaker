const express = require('express');
const store = require('../public/assets/js/store');

const apiRouter = express.Router();

apiRouter.get('/', (req,res) => {
    store.getNotes().then(notes => {
        return res.json(notes);
    }).catch(err => {
        return res.status(500).json(err);
    })
})

//post route to add /api/notes
//crate note
apiRouter.post("/", (req, res) => {
    // store.addNotes(req.body)
    store.addNotes(req.body).then(notes => {
        return res.json(notes)
    }).catch(err => {
        return res.status(500).json(err);
    })
});


// delete route to remove the notes /api/notes/:id
// apiRouter.delete('/:id', (req, res) => {
//     store.removeNote(req.params.id)
//     .then((notes) => {
//         res.json(notes)
//     }).catch(err => {
//         return res.status(500).json(err);
//     })
// })

module.exports = apiRouter;


//write api & html routes to use the methods in this store so that when it gets requests it will know what to do.