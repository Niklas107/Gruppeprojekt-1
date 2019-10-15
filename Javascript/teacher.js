class teacher extends user {                                                                     // Vi extender fra user
    constructor(userName, password, email, phoneNumber, firstName, lastName, studyProgram) {     // Alle attributter til teacher
        super(userName, password, email, phoneNumber, firstName, lastName);                      // Vi opstiller en super-funktion

        this.studyProgram = studyProgram;                                                        //Ekstra attributter som er opstillet til teacher
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
          + "\nTeacher: " + teacher
          + "\nStudy program: " + studyProgram
          + "\nCourse: " + course
          + "\nClassroom: " + classroom
          + "\nLecture Name: " + lectureName
          + "\nAdditional comment: " + comment);
  }

// create an array
var lectureList = ["LP intro","Programmering - Guide til objekter","Organisationskultur - eksamensforberedelse"];

function pushLecture() {
    // get value from the input text
    var lectureName = document.getElementById('lectureName').value;

    // append data to the array
    lectureList.push(lectureName);

    var pval = "";

    for(i = 0; i < lectureList.length; i++)
    {
        pval = pval + lectureList[i] + "<br/>";
    }

    // display array data
    document.getElementById('lName').innerHTML = pval;

}

function removeLecture() {
    var x = document.getElementById("hejsa");
    x.remove(x.selectedIndex);
}

  /*pushLecture virker kun i script tags i html filen. Når det virker i JS er næste step at få resultatet
  fra lectureList ind i select formen, for at kunne remove en af dem, eller lave en måde at kigge det array
  igennem, og fjerne den lecture i arrayet, som man vil fjerne.
   */










/*Lave en funktion så de kan fjerne en forelæsning

Lave en funktion så de kan tilføje en student til en forelæsning

Lave en funktion så de kan fjerne en student fra en forelæsning

Lave en funktion så de på deres profil kan ændre informationer om en forelæsning fx. tidspunkt, eller classroom. */
