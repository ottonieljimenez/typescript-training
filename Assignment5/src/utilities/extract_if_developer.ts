import { Developer } from "../positions/mixed/developer";

// conditional generic types
type ExtractIfDeveloper<T> = T extends Developer ? T : never;

function extractValue<T>(value: ExtractIfDeveloper<T>): ExtractIfDeveloper<T> {
    return value;
}

// create developer
const developer: Developer = {
    name: "John Doe",
    age: 30,
    role: "Developer",
    knowsReact: true,
}

const developerValue: Developer = extractValue(developer); // Works
//const nonDeveloperValue: string = extractValue("Hello World"); // Error