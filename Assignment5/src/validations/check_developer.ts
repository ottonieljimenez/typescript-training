import { Developer } from "../positions/mixed/developer"
import { HumanResourceEmployee } from "../positions/mixed/human_resource_employee";

// Conditional type that checks whether an employee is a developer
type Check<T> = T extends Developer ? "Employee is a developer" : "Employee is not a developer";

type Result1 = Check<Developer>; // "Employee is a developer"
type Result2 = Check<HumanResourceEmployee>; // "Employee is not a developer"