class teacher {
    constructor(studyProgram) {     //Ekstra attributter som er opstillet til teacher
        this.studyProgram = studyProgram;
    }
}
teacher.prototype = new user();     //Vi kalder user som har vores attributter der er gældende for alle grupper.
teacher.prototype.constructor = teacher;

