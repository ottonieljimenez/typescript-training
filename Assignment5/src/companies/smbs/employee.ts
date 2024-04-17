import { Employee } from "../../positions/base/employee";

import { validateStringLength } from "../../decorators/validate_string_length";

export class SMBSEmployee implements Employee {
    public id: number;

    @validateStringLength(3, 20)
    public name: string;
    
    public age: number;
    public role: string;
    public gender?: string;

    constructor(id: number, name: string, age: number, role: string, gender?: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.role = role;
        this.gender = gender;
    }
}