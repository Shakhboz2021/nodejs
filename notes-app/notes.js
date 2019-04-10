const fs = require('fs');
const chalk = require('chalk');
const getNotes = function (notes) {
    return notes;
};
const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => { //taking the array of duplicate notes with the same title
        return note.title === title
    });
    if (duplicateNotes.length === 0) {
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
const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
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

const loadNotes = function () {
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
    removeNote: removeNote
};