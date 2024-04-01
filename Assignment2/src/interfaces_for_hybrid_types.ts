// AdminUser interface
interface AdminUser {
    name: string;
    email: string;
    permissions: string[];
    role: string
}

// function to display AdminUser information
function showAdminUserInformation(adminUser: AdminUser) {
    console.log(adminUser)
}

// objects that satisfy the AdminUser interface
const firstAdminUser: AdminUser = {
    name: "Ottoniel Jiménez",
    email: "ottoniel.herrera@email.com",
    permissions: ["Read", "Write"],
    role: "Admin"
}

const secondAdminUser: AdminUser = {
    name: "Juan Jiménez",
    email: "jimenezperaltajuanjose@email.com",
    permissions: ["Read", "Write"],
    role: "Admin"
}

// display information of AdminUser objects
showAdminUserInformation(firstAdminUser);
showAdminUserInformation(secondAdminUser);