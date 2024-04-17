import { Employee } from "../positions/base/employee";

// OptionalKeys<T> type using distributed types with mapped types
type OptionalKeys<T> = {
    [K in keyof T]-?: undefined extends T[K] ? K : never;
}[keyof T];

type OptionalProperties = OptionalKeys<Employee>; // Result: 'gender'