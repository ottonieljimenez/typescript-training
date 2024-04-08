import { required } from "./validators/required";
import { validateEmailFormat } from "./validators/validate_email_format";
import { validateType } from "./validators/validate_type";

export class User {
    @required
    @validateType('String')
    public name: string;

    @validateType('String')
    public lastName: string;

    @required
    @validateType('String')
    @validateEmailFormat
    public email: string;

    constructor(name: string, lastName: string, email: string) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
    }
}