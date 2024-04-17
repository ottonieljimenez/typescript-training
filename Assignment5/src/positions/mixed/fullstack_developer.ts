import { BackendDeveloper } from "../specific/backend_developer";
import { FrontendDeveloper } from "../specific/frontend_developer";

// Fullstack developer type using intersection types
export type FullStackDeveloper = BackendDeveloper & FrontendDeveloper & { techStack: string[] };