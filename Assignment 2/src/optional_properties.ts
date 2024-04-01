// User interface that contains an optional email property
interface User {
    name: string;
    surname: string;
    email?: string;
}

function validateUserEmail(user: User): void {
    if (user.email) {
        console.log(`User has email ${user.email}.`)
    }
    else {
        console.log('User has no email!')
    }
}

const user_with_no_email: User = { name: "Ottoniel", surname: "Jiménez"}
const user_with_email: User = { name: "Juan", surname: "Jiménez", email: "jimenezperaltajuanjose@email.com" }

// test objects that implement the User interface
validateUserEmail(user_with_no_email) // output: User has no email!
validateUserEmail(user_with_email) // output: User has email jimenezperaltajuanjose@email.com.