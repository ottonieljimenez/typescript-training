import { Employee } from "../base/employee";

export interface CompensationAnalyst extends Employee {
    calculateSalary(): number;
    calculateBonus(): number;
    calculateVacation(): number;
}