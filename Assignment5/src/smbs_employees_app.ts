import { SMBSEmployee } from "./companies/smbs/employee";
import { logAction } from "./decorators/log_action";
import { Employee } from "./positions/base/employee";
import { UpdateEmployeeDTO } from "./utilities/update_employee_dto";

/**
 * @class SMBSEmployeeApp
 * 
 * Class to manage SMBSEmployees.
 *
 * @property currentEmployeeId - The current ID of the employee.
 * @property employees - An array of SMBSEmployees.
 */
export class SMBSEmployeeApp {
    private currentEmployeeId: number = 0;
    private employees: SMBSEmployee[] = [];

    /**
     * Method to add a new employee
     * @param employeeData of new employee to be added
     */
    @logAction
    async addEmployee(employeeData: Employee): Promise<void> {
        const { name, age, role, gender } = employeeData;
        const employee = new SMBSEmployee(this.currentEmployeeId + 1, name, age, role, gender);
        this.employees.push(employee);
        this.currentEmployeeId++;
    }

    /**
     * Method to get employee by id
     * @param id of employee to be retrieved
     * @returns the employee with the given id or undefined if not found
     */
    @logAction
    getEmployee(id: number): SMBSEmployee | undefined {
        return this.employees.find(employee => employee.id === id);
    }

    /**
     * Method to get all employees
     * @returns array of all employees
     */
    @logAction
    getEmployees(): SMBSEmployee[] {
        return this.employees;
    }

    /**
     * Method to update a particular employee by id
     * @param id of employee to update
     * @param employeeData of the employee to be updated
     */
    @logAction
    async updateEmployee(id: number, employeeData: UpdateEmployeeDTO): Promise<void> {
        const employee = this.getEmployee(id);

        if (employee) {
            employee.name = employeeData.name ?? employee.name;
            employee.age = employeeData.age ?? employee.age;
            employee.role = employeeData.role ?? employee.role;
            employee.gender = employeeData.gender ?? employee.gender;

            console.log(`Employee with ID ${id} has been updated.\n`);
        } else {
            throw new Error(`Employee with ID ${id} not found.\n`);
        }
    }

    /**
     * Method to delete a particular employee by id
     * @param id of employee to be deleted
     */
    @logAction
    async deleteEmployee(id: number): Promise<void> {
        const employee = this.getEmployee(id);

        if (employee) {
            this.employees = this.employees.filter(e => e.id !== id);
            console.log(`Employee with ID ${id} has been deleted.\n`);
        } else {
            throw new Error(`Employee with ID ${id} not found.\n`);
        }
    }
}