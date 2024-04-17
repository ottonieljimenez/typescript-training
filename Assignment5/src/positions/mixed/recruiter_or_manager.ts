import { Manager } from "../specific/manager";
import { Recruiter } from "../specific/recruiter";

// Conditional type that returns the type of the parameter if it is a Recruiter, 
// otherwise it returns the type of the parameter if it is a Manager.
type RecruiterOrManager<T> = T extends Recruiter ? Recruiter : Manager;

type ConditionalRecruiter = RecruiterOrManager<Recruiter>; // Result: Recruiter

type ConditionalManager = RecruiterOrManager<Manager>; // Result: Manager