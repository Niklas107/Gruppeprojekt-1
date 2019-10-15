class teacher {
    constructor(studyProgram) {     //Ekstra attributter som er opstillet til teacher
        this.studyProgram = studyProgram;
        }
  }
  function createLecture() {
      var teacher = document.getElementById("teacher").value;
      var studyProgram = document.getElementById("studyProgram").value;
      var course = document.getElementById("course").value;
      var classroom = document.getElementById("classroom").value;
      var lectureName = document.getElementById("lectureName").value;
      var comment = document.getElementById("comment").value;

      alert("Your lecture has been created"
          + "\nTeacher:" + " " + teacher
          + "\nStudy program:" + " " + studyProgram
          + "\nCourse:" + " " + course
          + "\nClassroom:" + " " + classroom
          + "\nLecture Name:" + " " + lectureName
          + "\nAdditional comment:" + " " + comment);
  }


function test() {
    var lectureName = document.getElementById("lectureName").value;

}








/* Lave en funktion så de kan oprette en forelæsning

Lave en funktion så de kan fjerne en forelæsning

Lave en funktion så de kan tilføje en student til en forelæsning

Lave en funktion så de kan fjerne en student fra en forelæsning

Lave en funktion så de på deres profil kan ændre informationer om en forelæsning fx. tidspunkt, eller classroom. */
