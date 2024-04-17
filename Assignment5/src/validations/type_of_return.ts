import { Intern } from "../positions/specific/intern";
import { Manager } from "../positions/specific/manager";

// Use of infer types to automatically infer types based on the assigned values
type TypeOfReturn<T> = T extends (...args: any[]) => infer R ? R : any;

function getIntern(): Intern {
    return {
        name: "John Doe",
        age: 30,
        role: "Intern",
        school: "University of Toronto"
    }
}

function getManager(): Manager {
    return {
        name: "Jane Doe",
        age: 25,
        role: "Manager",
        department: "Sales"
    }
}

type ResultType1 = TypeOfReturn<typeof getIntern>; // Result: Intern
type ResultType2 = TypeOfReturn<typeof getManager>; // Result: Manager