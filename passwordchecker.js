class User {
    constructor(username, password) {
        this.username = username;
        this._password = password;
    }

    get password() {
        return this._password.replace(/./g, '*');
    }

    set password(newPassword) {
        
        if (newPassword.length >= 8 && /\d/.test(newPassword) && /[A-Z]/.test(newPassword)) {
            this._password = newPassword;
        } else {
            console.error("Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
        }
    }
}

// Example usage:
const user = new User("john doe", "P@ssw0rd");
console.log(user.password); // Output: ********
user.password = "newpassword123";
console.log(user.password); // Output: ********
user.password = "weak";
// Output: Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.