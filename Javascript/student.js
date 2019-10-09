class student {
    constructor(studyProgram, creditCardInfo, courses, semester) {  //Ekstra attributter som er opstillet til student
        this.studyProgram = studyProgram;
        this.creditCardInfo = creditCardInfo;
        this.courses = courses;
        this.semester = semester;
    }
}
    student.prototype = new user();              //Vi kalder user som har vores attributter der er gældende for alle grupper.
student.prototype.constructor = student;




