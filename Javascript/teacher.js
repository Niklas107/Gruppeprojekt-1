class teacher {
    constructor(studyProgram) {     //Ekstra attributter som er opstillet til teacher
        this.studyProgram = studyProgram;
        }
         function lecture(teacher, studyProgram, course, classroom, lectureName) {
         super();
         this.course = course;
         this.classroom = classroom;
         this.lectureName = lectureName;
    }
  }

lecture2 = new lecture("alal", "fil", "VØS", "4", "Introduktion til Lineær programmering")
console.log(lecture2);






/* Lave en funktion så de kan oprette en forelæsning

Lave en funktion så de kan fjerne en forelæsning

Lave en funktion så de kan tilføje en student til en forelæsning

Lave en funktion så de kan fjerne en student fra en forelæsning

Lave en funktion så de på deres profil kan ændre informationer om en forelæsning fx. tidspunkt, eller classroom. */
