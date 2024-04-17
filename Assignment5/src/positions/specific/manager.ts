import { Employee } from "../base/employee";

export interface Manager extends Employee {
    department: string;
}