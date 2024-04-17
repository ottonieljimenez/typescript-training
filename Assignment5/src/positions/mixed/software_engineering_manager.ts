import { Developer } from "./developer";
import { Manager } from "../specific/manager";

// Software engineering manager type using intersection types
export type SoftwareEngineeringManager = Developer & Manager;