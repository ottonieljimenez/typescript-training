// Test SMBSEmployeeApp

import fs from 'fs';

import { Employee } from "./positions/base/employee";
import { SMBSEmployeeApp } from "./smbs_employees_app";
import { UpdateEmployeeDTO } from "./utilities/update_employee_dto";

console.log("Test SMBSEmployeeApp\n");

const smbsEmployeeApp = new SMBSEmployeeApp();

// create employees
const employee1: Employee = {
    name: "John Doe",
    age: 30,
    role: "Software Engineering Manager",
    gender: "male"
}

const employee2: Employee = {
    name: "Jane Doe",
    age: 25,
    role: "Software Engineer",
    gender: "female"
}

const employee3: Employee = {
    name: "Bob Smith",
    age: 35,
    role: "Project Manager",
    gender: "male"
}

const employee4: Employee = {
    name: "Sarah Johnson",
    age: 28,
    role: "Compensation Analyst",
    gender: "female"
}

const employee5: Employee = {
    name: "Mike Brown",
    age: 32,
    role: "Fullstack Developer",
    gender: "male"
}

// employee with invalid name
const employee6: Employee = {
    name: "Em",
    age: 32,
    role: "Backend Developer",
    gender: "female"
}

// add employees to the `smbsEmployeeApp`
smbsEmployeeApp.addEmployee(employee1);
smbsEmployeeApp.addEmployee(employee2);
smbsEmployeeApp.addEmployee(employee3);
smbsEmployeeApp.addEmployee(employee4);
smbsEmployeeApp.addEmployee(employee5);
// below line will error out since the name does not have the minimum valid length
//smbsEmployeeApp.addEmployee(employee6);

// get all employees
console.log("All employees:\n", smbsEmployeeApp.getEmployees(), "\n");

// get an employee by id
console.log("Employee with id 1:\n", smbsEmployeeApp.getEmployee(1), "\n");

// update employee with id 2
// create an object with the property to modify for the employee of interest
const updatedEmployeeData: UpdateEmployeeDTO = {
    role: "Senior Software Engineer"
}

// update the employee with id 2 with the new data
smbsEmployeeApp.updateEmployee(2, updatedEmployeeData);

// show the updated employee
console.log("Updated employee with id 2:\n", smbsEmployeeApp.getEmployee(2), "\n");

// delete employee with id 3
smbsEmployeeApp.deleteEmployee(3);

// show employees without the recently-deleted employee
console.log("All employees:\n", smbsEmployeeApp.getEmployees(), "\n");

//  convert employees to a JSON string
const jsonString = JSON.stringify(smbsEmployeeApp.getEmployees(), null, 2);

// define an output path
const outputPath = 'assets/employees.json';

// write JSON string to file
fs.writeFile(outputPath, jsonString, (err) => {
    if (err) {
        console.error("Error writing file: ", err);
        return;
    }
    
    console.log("File written successfully to ", outputPath);
})