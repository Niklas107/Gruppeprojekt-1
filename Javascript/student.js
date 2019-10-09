class student {
    constructor(studyProgram, creditCardInfo, courses, semester) {
        this.studyProgram = studyProgram;
        this.creditCardInfo = creditCardInfo;
        this.courses = courses;
        this.semester = semester;
    }
}
    student.prototype = new user();
student.prototype.constructor = student;




