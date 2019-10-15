class teacher extends user {                                                                     // Vi extender fra user
    constructor(userName, password, email, phoneNumber, firstName, lastName, studyProgram) {     // Alle attributter til teacher
        super(userName, password, email, phoneNumber, firstName, lastName);                      // Vi opstiller en super-funktion

        this.studyProgram = studyProgram;                                                        //Ekstra attributter som er opstillet til teacher
        }
  }


)
  function createLecture() {
      var teacher = document.getElementById("teacher").value;
      var studyProgram = document.getElementById("studyProgram").value;
      var course = document.getElementById("course");
      var classroom = document.getElementById("classroom").value;
      var lectureName = document.getElementById("lectureName").value;
      var comment = document.getElementById("comment").value;

      alert("Your lecture has been created"
          + "\nTeacher: " + teacher
          + "\nStudy program: " + studyProgram
          + "\nCourse: " + course
          + "\nClassroom: " + classroom
          + "\nLecture Name: " + lectureName
          + "\nAdditional comment: " + comment);
  }



  //Når jeg får funktionen med at oprette et array med alt der indtastes i lectureName
//til at virke, så skal det nedenstående kode køres










/*Lave en funktion så de kan fjerne en forelæsning

Lave en funktion så de kan tilføje en student til en forelæsning

Lave en funktion så de kan fjerne en student fra en forelæsning

Lave en funktion så de på deres profil kan ændre informationer om en forelæsning fx. tidspunkt, eller classroom. */
