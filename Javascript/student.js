/*class student extends user {                                                                                                    //Vi extender vores værdier fra User
    constructor(userName, password, email, phoneNumber, firstName, lastName, studyProgram, lecture, lecture_time, semester,) {
        super(userName, password, email, phoneNumber, firstName, lastName);                                                       //Vi bruger super-funktionen.

        this.studyProgram = studyProgram;                                                                                         // Vi tilføjer tre nye attributter, som kun skal benyttes hos student
        this.lecture = lecture;
        this.lectureTime = Lecture_time;
        this.semester = semester;
    }
}
*/
class Student {
    constructor(studyprogram, lecture, lectureTime) {
        this.studyprogram = studyprogram;
        this.lecture = lecture;
        this.lectureTime = lectureTime;
    }
    }

function SelectLecture() {
    var studyprogram = document.getElementById("category").value;
    var lecture = document.getElementById("subcategory").value;
    var lectureTime = document.getElementById("sub_subcategory").value;
    var comment = document.getElementById("comment").value;
            alert("You have joined a lecture"
                + "\nStudy Program: " + studyprogram
                + "\nLecture: " + lecture
                + "\nLecture Time: " + lectureTime
                + "\nAdditional comment:" + " " + comment);

    person = new Student(studyprogram, lecture, lectureTime);
    console.log(person);

}





// https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript