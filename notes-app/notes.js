const fs = require('fs');
const chalk = require('chalk');
const getNotes = (notes) => {
    return notes;
};
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.bgGreen('New note added'));
    } else {
        console.log(chalk.bgRed.black('Note title has already taken!'));
    }


};
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};


const listNoteNames = () => {
    const allNotes = loadNotes();
    allNotes.forEach(note => {
        console.log(note.title)
    })
};

const readNote = (title) => {
    allNotes = loadNotes();
    const selectedNote = allNotes.find(note => note.title === title);
    debugger

    if (selectedNote) {
        console.log(chalk.bold.green(selectedNote.title));
        console.log(selectedNote.body);
    } else {
        console.log(chalk.bgRed.black('No note found!'))
    }


};

const removeNote = (title) => {
    let allNotes = loadNotes();

    const notesToSave = allNotes.filter(note => {
        return note.title !== title
    });
    const isSame = JSON.stringify(allNotes) === JSON.stringify(notesToSave);
    if (isSame) {
        console.log(chalk.bgRed.black('There is no note with entered title!'));
    } else {
        console.log(chalk.bgGreen('Current note removed!'))
        saveNotes(notesToSave)
    }


};
const loadNotes = () => {
    try {
        // reading data from file
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }

};
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNoteNames: listNoteNames,
    readNote: readNote
};