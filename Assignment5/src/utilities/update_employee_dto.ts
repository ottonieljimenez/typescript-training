import { Employee } from "../positions/base/employee";

// DTO to update employee data
export type UpdateEmployeeDTO = { [K in keyof Employee]?: Employee[K] };