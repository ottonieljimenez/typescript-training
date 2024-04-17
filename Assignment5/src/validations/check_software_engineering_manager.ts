import { SoftwareEngineeringManager } from "../positions/mixed/software_engineering_manager";
import { HumanResourceEmployee } from "../positions/mixed/human_resource_employee";

// Check if the employee is a software engineering manager
type Check<T> = T extends SoftwareEngineeringManager
    ? "Employee is a software engineering manager"
    : "Employee is not a software engineering manager";

type Result1 = Check<SoftwareEngineeringManager>; // Result: "Employee is a software engineering manager"
type Result2 = Check<HumanResourceEmployee>; // Result: "Employee is not a software engineering manager"