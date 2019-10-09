class teacher {
    constructor(studyProgram) {
        this.studyProgram = studyProgram;
    }
}
teacher.prototype = new user();
teacher.prototype.constructor = teacher;

