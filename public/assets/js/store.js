const fs = require('fs');
const util = require('util');
const { v4: uuidv4 } = require('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync('./db.json', 'utf8');
    }

    write(note) {
        return writeFileAsync('./db.json', JSON.stringify(note))
    }

    getNotes() {
        return this.read().then(notes => {
            let parseNotes;

            try{
                parseNotes = [].concat(JSON.parse(notes));
            }
            
            catch(err){
                parseNotes = []
            }

            return parseNotes;
        })
    }

    addNotes(note){
        const title = note.title;
        const text = note.text;

        if (!title || !text){
            throw new Error('You need a title & text to save a note to the database')
        }

        const newNote = {title, text, id: uuidv4()}

        return this.getNotes().then(notes => {
            return [...notes, newNote]
        }).then(updatedNotes => {
            return this.write(updatedNotes)
        }).then(() => {
            return newNote
        })
    }

    removeNote(id){
        return this.getNotes().then(notes => {
            return notes.filter(note => note.id !== id)
        }).then(filteredNotes => this.write(filteredNotes))
    }
}

module.exports = new Store();



