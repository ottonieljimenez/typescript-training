import fs from 'fs';

import { CreateNoteDTO, Note, UpdateNoteDTO} from "./note";
import { NotesApp } from "./notes_app";
import { User } from './user';

// test `NotesApp`
console.log('********************************** Test NotesApp **********************************');
const notesApp = new NotesApp();

// Create note for notesApp
const note1: CreateNoteDTO = {
    title: "Testing note",
    description: "This is a testing note.",
    userId: 1,
    dueDate: "2024-04-04T20:41:32.733Z"
}

// add `note1` to the `notesApp`
notesApp.addNote(note1);
console.log(notesApp.getNotes());

// Create more notes for the `notesApp`
const note2: CreateNoteDTO = {
    title: "Testing note 2",
    description: "This is another testing note.",
    userId: 1,
    dueDate: "2024-04-04T20:44:50.681Z"
}

const note3: CreateNoteDTO = {
    title: "Testing note that is made long for testing purposes",
    description: "This is a testing note for even further testing.",
    userId: 1,
    dueDate: "2024-04-04T20:45:19.752Z"
}

// add `note2` and `note3` to the `notesApp`
notesApp.addNote(note2);
notesApp.addNote(note3);

// display all notes
console.log(notesApp.getNotes());

// get a note by id (e.g., note with id 2)
console.log(notesApp.getNote(2));

// update a note by id (e.g., note with id 3)
notesApp.updateNote(3, { title: "Testing note 3" });

// display updated note
console.log(notesApp.getNote(3));

// delete a note by id (e.g., note with id 2)
notesApp.deleteNote(2);

// display all notes after deletion
console.log(notesApp.getNotes());

// convert notes to JSON string
const jsonString = JSON.stringify(notesApp.getNotes(), null, 2);

// define an output path
const outputPath = 'assets/notes.json';

// write JSON string to file
fs.writeFile(outputPath, jsonString, (err) => {
    if (err) {
        console.error("Error writing file: ", err);
        return;
    }
    console.log("File has been saved: ", outputPath);
})

// Test `User` class
console.log('*********************************** Test User ***********************************');

// this will error out since the email is not in the correct format
//const incorrectUser1 = new User("Ottoniel", "Jiménez", "ottoniel.herrera");

// this will error out since the lastName is not in the correct format
//const incorrectUser2 = new User("Ottoniel", undefined, "ottoniel.herrera@gmail.com");

const user1 = new User("Juan", "Jiménez", "jimenezperaltajuanjose@gmail.com");
console.log(user1);

// second user with correct email
const user2 = new User("Ottoniel", "Jiménez", "ottoniel.herrera@email.com");
console.log(user2);
console.log(user2.email);