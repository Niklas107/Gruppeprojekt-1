class Teacher extends User {
    constructor (userName, password, email, phoneNumber, firstName, lastName, studyProgram) {
        super(userName, password, email, phoneNumber, firstName, lastName);

        this studyProgram = studyProgram;
    }
}

console.log(localStorage.getItem("Teacher"))
var teacherList = []

if (localStorage.getItem("Teacher") == null) {

    teacherList.push(new Teacher("Chris","1234","Christopher@andre.bz","31418551","Christopher","André","Ha(it)","1"));

    var teacherListString = JSON.stringify(teacherList)
    localStorage.setItem('Teacher', teacherListString)

} else {
    teacherList = JSON.parse(localStorage.getItem('Teacher'))
}

var teacher = document.getElementById("teacher");
    var studyProgram = document.getElementById("studyProgram");
    var course = document.getElementById("course");
    var classRoom = document.getElementById("Classroom");
    var lectureName = document.getElementById("lectureName");
    var day = document.getElementById("day");
    var time = document.getElementById("time");
    var comment = document.getElementById("comment");


//Store input from lecture
function storeLecture () {
    localStorage.setItem("Teacher", teacher.value);
    localStorage.setItem("Study program", studyProgram.value);
    localStorage.setItem("Course", course.value);
    localStorage.setItem("Classroom", classRoom.value + " - " + test1);
    localStorage.setItem("Lecture name", lectureName.value);
    localStorage.setItem("Day", day.value);
    localStorage.setItem("Time", time.value);
    localStorage.setItem("Comment", comment.value);

    alert("Your lecture has been created"
          + "\nTeacher: " + teacher.value
          + "\nStudy program: " + studyProgram.value
          + "\nCourse: " + course.value
          + "\nClassroom: " + classRoom.value + " - " + test1
          + "\nLecture name: " + lectureName.value
          + "\nDay: " + day.value
          + "\nTime of lecture: " + time.value
          + "\nAdditional comment: " + comment.value);
  }

function showLecture() {
    console.log("Show user stored in localStorage");
    console.log(localStorage);
}

