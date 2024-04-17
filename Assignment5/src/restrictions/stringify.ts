import { Employee } from "../positions/base/employee"

// Stringify<T> mapped type
type Stringify<T> = {
    [K in keyof T]: string;
}

// Create StringifiedEmployee from Stringify<T> type
type StringifiedEmployee = Stringify<Employee> // Result: { name: string; age: string; role: string }

const employee: StringifiedEmployee = {
    name: "John Doe",
    //age: 30, // Error: `age` must be of type string
    age: "30",
    role: "Manager"
}

console.log('Stringified employee:', employee);