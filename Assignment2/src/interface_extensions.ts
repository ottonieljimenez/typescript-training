// Employee interface
interface Employee {
    name: string;
    surname: string;
}

// Developer interface
interface Developer extends Employee {
    level: string;
    type: string;
}

// Designer interface
interface Designer extends Employee {
    expertise: string;
    tool_knowledge: string[];
}

// object of type Developer
const developer: Developer = {
    name: "Juan",
    surname: "Jiménez",
    level: "Senior",
    type: "Backend"
}

// object of type Designer
const designer: Designer = {
    name: "Mayra",
    surname: "Herrera",
    expertise: "UX Design",
    tool_knowledge: ["Adobe Creative Cloud, Sketch"]
}

// function to access properties of developer object
function accessDeveloperProperties(developer: Developer): void {
    console.log("Accessing developer properties...");
    console.log(`Name: ${developer.name}`);
    console.log(`Surname: ${developer.surname}`);
    console.log(`Level: ${developer.level}`);
    console.log(`Type: ${developer.type} \n`);
}

// function to access properties of designer object
function accessDesignerProperties(designer: Designer): void {
    console.log("Accessing designer properties...");
    console.log(`Name: ${designer.name}`);
    console.log(`Surname: ${designer.surname}`);
    console.log(`Expertise: ${designer.expertise}`);
    console.log(`Tool Knowledge: ${designer.tool_knowledge} \n`);
}

// call function to access developer properties
accessDeveloperProperties(developer);

// call function to access designer properties
accessDesignerProperties(designer);