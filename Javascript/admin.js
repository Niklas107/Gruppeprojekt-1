class User {                                                                   //Klassen user er blot overklasse som de andre klasser inheriter fra
    constructor(userName, password, email, phoneNumber, firstName, lastName) {  //Her er alle de attributter som alle classes skal bruge
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.firstName= firstName;
        this.lastName = lastName;
    }
}

class Admin extends User {                                                                   // Vi extender fra user
    constructor(userName, password, email, phoneNumber, firstName, lastName) {   // Alle attributter til admin
        super(userName, password, email, phoneNumber, firstName, lastName);
    }
}


/*
//Local Storage in order to make a admin able to log in.
console.log(localStorage.getItem("Admin"));
var adminList = [];

if (localStorage.getItem("Admin") == null) {

    adminList.push(new Admin("","","","","","",""));
    var adminListString = JSON.stringify(adminList);
    localStorage.setItem('Admin', adminListString)

} else {
    adminList = JSON.parse(localStorage.getItem('Admin'))
}
*/
/** function delete() {
    var x = document.getElementById("DeleteStudent");
    x.remove(x.selectedIndex);
}
*/
function deleteStudent() {
    var x = document.getElementById("allStudents");
    x.remove(x.selectedIndex);
}

function deleteTeacher() {
    var x = document.getElementById("allTeachers");
    x.remove(x.selectedIndex);
}
function deleteLecture() {
    var x = document.getElementById("allLectures");
    x.remove(x.selectedIndex);
}

//since studentlist is not defined in this js document, i had to define a new variable "studentinformation". We can fetch the data of our students from the local storage, with the key student.
function showStudentInformation() {
     var studentinformation = JSON.parse(localStorage.getItem("Student"));
        alert("Student Information:"
            + "\n name: "  + studentinformation[0].firstName + " " + studentinformation[0].lastName + "\n email: " + studentinformation[0].email
            + "\n name: "  + studentinformation[1].firstName + " " + studentinformation[1].lastName + "\n email: " + studentinformation[1].email
            + "\n name: "  + studentinformation[2].firstName + " " + studentinformation[2].lastName + "\n email: " + studentinformation[2].email
            + "\n name: "  + studentinformation[3].firstName + " " + studentinformation[3].lastName + "\n email: " + studentinformation[3].email
        )
}
function showTeacherinformation() {
    var teacherInformation = JSON.parse(localStorage.getItem("Teacher"));
        alert ("Teacher Information:"
        + "\n name: " + teacherInformation[0].firstName + " " + teacherInformation[0].lastName + "\n email: " + teacherInformation[0].email
        + "\n name: " + teacherInformation[1].firstName + " " + teacherInformation[1].lastName + "\n email: " + teacherInformation[1].email
        + "\n name: " + teacherInformation[2].firstName + " " + teacherInformation[2].lastName + "\n email: " + teacherInformation[2].email
    )
}
var adminlist = [];
//Our hardcoded users (Admin). here all of their information is gathered. e.g - this is where the log in function gets the matching username and password.
if (localStorage.getItem("Admin") == null) {
    adminlist.push(new Admin("Admin","123","Admin@gmail.com","12345678","Admin","Admin"));
    var adminListString = JSON.stringify(adminlist);
    localStorage.setItem('Admin', adminListString);
} else {
    adminlist = JSON.parse(localStorage.getItem('Admin'))
}
console.log(adminlist[0]);
