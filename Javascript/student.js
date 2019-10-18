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
class student {
    constructor(studyprogram, lecture, lectureTime){
        this.studyprogram = studyprogram;
        this.lecture = lecture;
        this.lectureTime = lectureTime;
    }
    }

function SelectCourse() {
    var studyprogram = document.getElementById("category").value;
    var lecture = document.getElementById("subcategory").value;
    var lectureTime = document.getElementById("sub_subcategory").value;
    var comment = document.getElementById("comment").value;
    var newStudent = new student(studyprogram,lecture,lectureTime);

    //Validation form
/*    function validationForm() {
        var form_valid = true;
        var validation_message = "";

        if (form_valid) {

 */
            alert("You have joined a lecture"
                + "\nStudy Program: " + studyprogram
                + "\nLecture: " + lecture
                + "\nLecture Time: " + lectureTime
                + "\nAdditional comment:" + " " + comment);
            /*
        }
        else {
            alert(validation_message);
        }

        var dd1 = document.getElementById("category").value;
        if (dd1 !== "Ha(it)") {
            form_valid = false;
            validation_message += "A studyprogram must be selected \n";
            return (form_valid);


        }
    }
*/

}

//
//


/* Niklas = new student("Niller", "12345", "Nik123@gmail.com", "12345678", "Niklas","jh",""," ",""  );
console.log(Niklas);
*/








// https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript