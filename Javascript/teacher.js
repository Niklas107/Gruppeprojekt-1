
    var teacher = document.getElementById("teacher");
    var studyProgram = document.getElementById("studyProgram");
    var course = document.getElementById("course");
    var classRoom = document.getElementById("classRoom");
    var lectureName = document.getElementById("lectureName");
    var day = document.getElementById("day");
    var time = document.getElementById("time");
    var comment = document.getElementById("comment");


//Function to create lecture
function createLecture() {
    this.teacher = document.getElementById("teacher").value;
    this.studyProgram = document.getElementById("studyProgram").value;
    this.course = document.getElementById("course").value;
    this.classRoom = document.getElementById("classRoom").value;
    this.lectureName = document.getElementById("lectureName").value;
    this.day = document.getElementById("day").value;
    this.time = document.getElementById("time").value;
    this.comment = document.getElementById("comment").value;
}

//Store input from lecture
function storeLecture () {
    localStorage.setItem("teacher", teacher.value);
    localStorage.setItem("studyProgram", studyProgram.value);
    localStorage.setItem("course", course.value);
    localStorage.setItem("classRoom", classRoom.value);
    localStorage.setItem("lectureName", lectureName.value);
    localStorage.setItem("day", day.value);
    localStorage.setItem("time", time.value);
    localStorage.setItem("comment", comment.value);

    alert("Your lecture has been created"
          + "\nTeacher: " + teacher.value
          + "\nStudy program: " + studyProgram.value
          + "\nCourse: " + course.value
          + "\nClassroom: " + classRoom.value
          + "\nLecture name: " + lectureName.value
          + "\nDay: " + day.value
          + "\nTime of lecture: " + time.value
          + "\nAdditional comment: " + comment.value);
  }

function showLecture() {
    console.log("Show user stored in localStorage");
    console.log(localStorage);
}