class student {
    constructor(studyProgram, creditCardInfo, course, semester) {  //Ekstra attributter som er opstillet til student
        this.studyProgram = studyProgram;
        this.creditCardInfo = creditCardInfo;
        this.course = course;
        this.semester = semester;
    }
}


Niklas = new student("Ha(it)", "4521 5986 2541 3654 month:04 year20 controlnumber: 666", "VØS", "1");
console.log(Niklas);


student.prototype = new user();              //Vi kalder user som har vores attributter der er gældende for alle grupper.
student.prototype.constructor = student;

}



