// Use case for "any"

function findType(parameter: any): string {
    return typeof(parameter);
}

const text = "This is a test text";
const textType: string = findType(text);
console.log(textType); // output: string

const testObject = { name: 'Otto', lastName: "Jimenez" }
const objectType: string = findType(testObject);
console.log(objectType); // output: object

// Use case for "void"
function printMessage(message: string): void {
    console.log(message);
}

printMessage("Hello from Otto!");
printMessage("Testing message");