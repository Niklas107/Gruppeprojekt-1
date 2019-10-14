class admin {
    constructor(adminName) {             //Ekstra attributter som er opstillet til student
        this.adminName = adminName;
    }
}
admin.prototype = new user();          ////Vi kalder user som har vores attributter der er gældende for alle grupper.
admin.prototype.constructor = admin;

class newTeacher {
    constructor(firstName,lastName,email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}

const niller = newTeacher("Niklas","Niller","nik123@gmail.com");
console.log(niller);