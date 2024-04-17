import { Manager } from "../positions/specific/manager";
import { Recruiter } from "../positions/specific/recruiter";

// Conditional types with multiple conditions
type ExtractManagerOrRecruiter<T> = T extends Manager
    ? Manager
    : T extends Recruiter
    ? Recruiter
    : never;

type Extracted = ExtractManagerOrRecruiter<Manager | Recruiter | boolean>; // Result: Manager | Recruiter