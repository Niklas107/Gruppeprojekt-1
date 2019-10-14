class student extends user }
    constructor=(userName, password, email, phoneNumber, firstName, lastName, studyProgram, course, semester) {
        this.studyProgram = studyProgram;
        this.course = course;
        this.semester = semester;
    }
}


Niklas = new student("Niller", "12345", "Nik123@gmail.com", "12345678", "Niklas", "Something","","","" );
console.log(Niklas);


student.prototype = new user();              //Vi kalder user som har vores attributter der er gældende for alle grupper.
student.prototype.constructor = student;

}



