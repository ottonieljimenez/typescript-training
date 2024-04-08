import { logAction } from "./validators/log_action";
import { Note, CreateNoteDTO, UpdateNoteDTO } from "./note";

export class NotesApp {
    private currentNoteId: number = 0;
    private notes: Note[] =[];

    /**
     * Method to add a note.
     * @param noteData 
     */
    @logAction("Added new note")
    addNote(noteData: CreateNoteDTO): void {
        const { title, description, userId, dueDate } = noteData;
        const note = new Note(this.currentNoteId + 1, title, description, userId, dueDate);

        this.notes.push(note);

        this.currentNoteId += 1;
    }

    /**
     * Method to get a note by ID.
     * @param id 
     * @returns 
     */
    @logAction("Read a note")
    getNote(id: number): Note | undefined {
        return this.notes.find(note => note.id === id);
    }

    /**
     * Method to get all notes.
     * @returns 
     */
    @logAction("Read all notes")
    getNotes(): Note[] {
        return this.notes;
    }

    /**
     * Method to update a note by ID.
     * @param id 
     * @param updatedNoteData 
     * @returns 
     */
    @logAction("Updated a note")
    updateNote(id: number, updatedNoteData: UpdateNoteDTO): boolean {
        const noteToUpdateIndex = this.notes.findIndex(note => note.id === id);
        const { title, description, userId, dueDate } = updatedNoteData;

        if (this.notes[noteToUpdateIndex] != undefined) {
            // update title if provided
            if (title != undefined) {
                this.notes[noteToUpdateIndex].title = title;
            }
            // updaste description if provided
            if (description != undefined) {
                this.notes[noteToUpdateIndex].description = description;
            }
            // update userId if provided
            if (userId != undefined) {
                this.notes[noteToUpdateIndex].userId = userId;
            }
            // update dueDate if provided
            if (dueDate != undefined) {
                this.notes[noteToUpdateIndex].dueDate = dueDate;
            }
            // return true indicating successful update
            return true;
        }
        // note with given ID not found
        return false;
    }

    /**
     * Method to delete a note by ID.
     * @param id 
     */
    @logAction("Deleted a note")
    deleteNote(id: number): void {
        this.notes = this.notes.filter(note => note.id !== id);
    }
}