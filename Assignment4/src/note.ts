import { checkLength } from "./validators/check_length";
import { required } from "./validators/required";

/**
 * @class Note
 */
export class Note {
    public id: number;

    @required
    @checkLength(3, 20)
    public title: string = "";

    public description: string;
    public userId: number;
    public dueDate: string;

    constructor(id: number, title: string, description: string, userId: number, dueDate: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.userId = userId;
        this.dueDate = dueDate;
    }
}

export interface CreateNoteDTO {
    title: string;
    description: string;
    userId: number;
    dueDate: string;
}

export interface UpdateNoteDTO {
    title?: string;
    description?: string;
    userId?: number;
    dueDate?: string;
}