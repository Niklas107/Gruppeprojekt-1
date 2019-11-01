class User {                                                                   //Klassen user er blot overklasse som de andre klasser inheriter fra
    constructor(userName, password, email, phoneNumber, firstName, lastName) {  //Her er alle de attributter som alle classes skal bruge
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.firstName= firstName;
        this.lastName = lastName;
    }
}

class Student extends User {                                                                                                    //Vi extender vores værdier fra User
    constructor(userName, password, email, phoneNumber, firstName, lastName, studyProgram, semester) {
        super(userName, password, email, phoneNumber, firstName, lastName);                                                       //Vi bruger super-funktionen.

        this.studyProgram = studyProgram;                                                                                         // Vi tilføjer tre nye attributter, som kun skal benyttes hos student
        this.semester = semester;
    }
}
//Local Storage in order to make a student able to log in.
var studentList = [];
//Our hardcoded users (students). here all of their information is gathered. e.g - this is where the log in function gets the matching username and password.
if (localStorage.getItem("Student") == null) {
        studentList.push(new Student("ChrisMJandre","Agurke","Christopher@andre.bz","31418551","Christopher","André","HA(it.)","1"));
        studentList.push(new Student("Niller","1234", "nilb107@gmail.com", "31320232","Niklas", "L-B", "HA(it.)", "1"));
        studentList.push(new Student("Sven","bord123","Sven@gmail.com","57647239", "Sven", "Eriksen","HA(jur.)","4"));
        studentList.push(new Student("Kasper", "stol123", "Kasper@gmail.com", "85923043", "Kasper", "Rasmussen", "HA(it.)", "3"));
var studentListString = JSON.stringify(studentList);
localStorage.setItem('Student', studentListString);

    } else {
        studentList = JSON.parse(localStorage.getItem('Student'))
    }

console.log(localStorage.getItem("Student"))

function selectLecture() {
    var studyprogram = document.getElementById("category").value;
    var Course = document.getElementById("subcategory").value;
    var lecture = document.getElementById("sub_subcategory").value;
    var comment = document.getElementById("comment").value;

    //Validation form
/*    function validationForm() {
        var form_valid = true;
        var validation_message = "";

        if (form_valid) {

 */
            alert("You have joined a lecture"
                + "\nStudy Program: " + studyprogram
                + "\nCourse: " + Course
                + "\nLecture: " + lecture
                + "\nAdditional comment:" + " " + comment);
            /*
        }
        else {
            alert(validation_message);
        }

        var dd1 = document.getElementById("category").value;
        if (dd1 !== "HA(it)") {
            form_valid = false;
            validation_message += "A studyprogram must be selected \n";
            return (form_valid);


        }
    }
*/

//
//


/* Niklas = new student("Niller", "12345", "Nik123@gmail.com", "12345678", "Niklas","jh",""," ",""  );
console.log(Niklas);
*/



}
/*
// Store input when astudent chooses to join a lecture.
var studyprogram1 = document.getElementById("category");
var lecture1 = document.getElementById("subcategory");
var lectureTime1 = document.getElementById("sub_subcategory");
function storeJoinLecture() {
    localStorage.setItem("studyprogram", studyprogram1.value);
    localStorage.setItem("lecture", lecture1.value);
    localStorage.setItem("lecturetime", lectureTime1.value);
    console.log (studyprogram1);
}
*/
function showStudentInformation() {
    console.log(" name:  "+ studentList[0].firstName + " " + studentList[0].lastName + "\n email: " + studentList[0].email);
    console.log(" name:  "+ studentList[1].firstName + " " + studentList[1].lastName + "\n email: " + studentList[1].email);
    console.log(" name:  "+ studentList[2].firstName + " " + studentList[2].lastName + "\n email: " + studentList[2].email);
    console.log(" name:  "+ studentList[3].firstName + " " + studentList[3].lastName + "\n email: " + studentList[3].email);
}

// https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript