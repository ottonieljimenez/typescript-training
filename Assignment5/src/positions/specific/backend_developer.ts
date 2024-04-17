import { Employee } from "../base/employee";

export interface BackendDeveloper extends Employee {
    writeAPI(): void;
}