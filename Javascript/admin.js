class admin {
    constructor(adminName) {             //Ekstra attributter som er opstillet til student
        this.adminName = adminName;
    }
}

class newTeacher {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

}

const newTeacher1 = Teacher("Josefine","Colberg","Jos123@gmail.com");
console.log (newTeacher1);