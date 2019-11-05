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

class Teacher extends User {
    constructor (userName, password, email, phoneNumber, firstName, lastName, studyProgram, semester) {
        super(userName, password, email, phoneNumber, firstName, lastName);

        this.studyProgram = studyProgram;
        this.semester = semester;
    }
}

console.log(localStorage.getItem("Teacher"));
var teacherList = [];

if (localStorage.getItem("Teacher") == null) {

    teacherList.push(new Teacher("Jose","4567","Josefinecolberg@gmail.com","23626206","Josefine","Colberg","Ha(it)","3"));
    teacherList.push(new Teacher("Ca18ab", "Øl4ever", "ca18ab@student.cbs.com", "45668921", "Calle", "Olsen", "HA(it)","5"));
    teacherList.push(new Teacher("Ølgod", "password", "miøl18a@student.cbs.com", "66698724", "Mikkel", "Ølgod", "HA(jur.)", "4"));
    var teacherListString = JSON.stringify(teacherList);
    localStorage.setItem('Teacher', teacherListString)

} else {
    teacherList = JSON.parse(localStorage.getItem('Teacher'))
}

function createLecture() {
    var teacher1 = document.getElementById("teacher1").value;
    var studyProgram1 = document.getElementById("studyProgram").value;
    var semester = document.getElementById("semester").value;
    var course1 = document.getElementById("course").value;
    var classRoom1 = document.getElementById("Classroom").value;
    var lectureName1 = document.getElementById("lectureName").value;
    var day1 = document.getElementById("day").value;
    var time1 = document.getElementById("time").value;
    var comment1 = document.getElementById("comment").value;

    alert("Your lecture has been created"
        + "\nTeacher: " + teacher1
        + "\nStudy program: " + studyProgram1
        + "\nSemester: " + semester
        + "\nCourse: " + course1
        + "\nClassroom: " + classRoom1 + " - " + test1
        + "\nLecture name: " + lectureName1
        + "\nDay: " + day1
        + "\nTime of lecture: " + time1
        + "\nAdditional comment: " + comment1);
}

function removeLecture() {
    var x = document.getElementById("teacherLecture");
    x.remove(x.selectedIndex);
}

function showStudentInformation() {
    var studentinformation = JSON.parse(localStorage.getItem("Student"))
    console.log(" name:  "+ studentinformation[0].firstName + " " + studentinformation[0].lastName + "\n email: " + studentinformation[0].email);
    console.log(" name:  "+ studentinformation[1].firstName + " " + studentinformation[1].lastName + "\n email: " + studentinformation[1].email);
    console.log(" name:  "+ studentinformation[2].firstName + " " + studentinformation[2].lastName + "\n email: " + studentinformation[2].email);
    console.log(" name:  "+ studentinformation[3].firstName + " " + studentinformation[3].lastName + "\n email: " + studentinformation[3].email);
}

function removeStudent() {
    var x = document.getElementById("studentList");
    x.remove(x.selectedIndex);
}
/** function showLecture() {
    console.log("Show localStorage");
    console.log(localStorage);
}
*/

