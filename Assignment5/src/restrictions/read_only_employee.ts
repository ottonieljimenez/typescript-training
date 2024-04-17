import { Employee } from "../positions/base/employee";

// Read-only employee from existing Employee type using mapped types
type ReadOnlyEmployee = { readonly [K in keyof Employee]: Employee[K] };

// test `ReadOnlyEmployee` type
const readOnlyEmployee: ReadOnlyEmployee = {
    name: "John Doe",
    age: 30,
    role: "Developer",
}

//readOnlyEmployee.role = "Manager"; // Error: Cannot assign to 'role' because it is a read-only property