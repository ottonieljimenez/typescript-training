import { CompensationAnalyst } from "../specific/compensation_analyst";
import { Recruiter } from "../specific/recruiter";

// Human resource employee type using union types
export type HumanResourceEmployee = CompensationAnalyst | Recruiter;