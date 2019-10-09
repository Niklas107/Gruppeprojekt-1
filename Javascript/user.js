class user {
    constructor(userName, password, email, phoneNumber, firstName, lastName) {
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.firstName= firstName;
        this.lastName = lastName;
    }
}

user.prototype.getUser = function(){
    return this.userName + this.password + this.email + this.phoneNumber + this.firstName + this.lastName;
}
