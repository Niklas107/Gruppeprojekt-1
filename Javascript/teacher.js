class Teacher extends User {
    constructor (userName, password, email, phoneNumber, firstName, lastName, studyProgram) {
        super(userName, password, email, phoneNumber, firstName, lastName);

        this.studyProgram = studyProgram;
    }
}

console.log(localStorage.getItem("Teacher"))
var teacherList = []

if (localStorage.getItem("Teacher") == null) {

    teacherList.push(new Teacher("Jose","4567","Josefinecolberg@gmail.com","23626206","Josefine","Colberg","Ha(it)","2"));

    var teacherListString = JSON.stringify(teacherList)
    localStorage.setItem('Teacher', teacherListString)

} else {
    teacherList = JSON.parse(localStorage.getItem('Teacher'))
}

function createLecture() {
    var teacher1 = document.getElementById("teacher1").value;
    var studyProgram1 = document.getElementById("studyProgram").value;
    var course1 = document.getElementById("course").value;
    var classRoom1 = document.getElementById("Classroom").value;
    var lectureName1 = document.getElementById("lectureName").value;
    var day1 = document.getElementById("day").value;
    var time1 = document.getElementById("time").value;
    var comment1 = document.getElementById("comment").value;

    alert("Your lecture has been created"
        + "\nTeacher: " + teacher1
        + "\nStudy program: " + studyProgram1
        + "\nCourse: " + course1
        + "\nClassroom: " + classRoom1 + " - " + test1
        + "\nLecture name: " + lectureName1
        + "\nDay: " + day1
        + "\nTime of lecture: " + time1
        + "\nAdditional comment: " + comment1);
}


function showLecture() {
    console.log("Show user stored in localStorage");
    console.log(localStorage);
}


