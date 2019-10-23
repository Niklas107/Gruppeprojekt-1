class User {                                                                    //Klassen user er blot overklasse som de andre klasser inheriter fra
    constructor(userName, password, email, phoneNumber, firstName, lastName) {  //Her er alle de attributter som alle classes skal bruge
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.firstName= firstName;
        this.lastName = lastName;
    }
}

//user.prototype.getUser = function(){ //Her forsøger vi at gøre det muligt for underklasserne at få prototype for user og lave en ny så de får attributter herfra
    //return this.userName + this.password + this.email + this.phoneNumber + this.firstName + this.lastName;
