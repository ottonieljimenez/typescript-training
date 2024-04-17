import { BackendDeveloper } from "../specific/backend_developer";
import { FrontendDeveloper } from "../specific/frontend_developer";

// Developer type using union types
export type Developer = BackendDeveloper | FrontendDeveloper;