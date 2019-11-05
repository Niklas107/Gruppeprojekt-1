// Klassen User er blot en overklasse som dens child Teacher inheritter fra - Nik
class User {
    constructor(userName, password, email, phoneNumber, firstName, lastName) {
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.firstName= firstName;
        this.lastName = lastName;
    }
}

class Teacher extends User {
    constructor (userName, password, email, phoneNumber, firstName, lastName, studyProgram, semester) {
        super(userName, password, email, phoneNumber, firstName, lastName);

        this.studyProgram = studyProgram;
        this.semester = semester;
    }
}
// Log in for Teachers - using Local storage - Chris
// We start by creating an empty array called teacherlist - Chris
console.log(localStorage.getItem("Teacher"));
var teacherList = [];
// Our hardcoded users (teachers). here all of their information is gathered. e.g - this is where the log in function gets the matching username and password - Chris
// When we have a class for our teachers, it will ask us for all of the data points that we defined in the class student and user - Chris
if (localStorage.getItem("Teacher") == null) {
// Here we push a new Teacher to our empty array - Chris
    teacherList.push(new Teacher("Jose","4567","Josefinecolberg@gmail.com","23626206","Josefine","Colberg","Ha(it)","3"));
    teacherList.push(new Teacher("Ca18ab", "Øl4ever", "ca18ab@student.cbs.com", "45668921", "Calle", "Olsen", "HA(it)","5"));
    teacherList.push(new Teacher("Ølgod", "password", "miøl18a@student.cbs.com", "66698724", "Mikkel", "Ølgod", "HA(jur.)", "4"));
// The studentlist is then made into a string using the JSON.stringify command - Chris
    var teacherListString = JSON.stringify(teacherList);
// Here we set out studentListString in local storage so that we can later retrieve it - Chris
    localStorage.setItem('Teacher', teacherListString)
} else {
    teacherList = JSON.parse(localStorage.getItem('Teacher'))
}

//Code for validating time. - Alex
//Tjekker om tid på dagen (som findes i teacher.html) er skrevet efter det rigtige format. - Alex
function validateHhMm(inputField) {
    var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(inputField.value);

    return isValid;
}

//Validere inputs til create lecture. - Alex
function validateCreateLecture() {
    if (!document.getElementById("teacher1").value) {
        alert("Name must be entered!");
        return false;
    }
// Tjekker om der er blevet valgt noget andet end standard-værdien ved dropdown. Alerter at der skal vælges noget andet end standard-værdien. - Alex
    if (document.getElementById("studyProgram").value == "Select study program") {
        alert("Study program must be selected!");
        return false;
    }
    //Alerter at der ikke er blevet valgt noget andet end standard værdien. For at gå videre skal der vælges noget andet end standard-værdien. - Alex
    if (document.getElementById("course").value == "Select course") {
        alert("Course must be selected!");
        return false;
    }
    // Tjekker om der er blevet valgt noget andet end standard-værdien ved select classroom. Alerter at der skal vælges noget andet end standard-værdien. - Alex
    if (document.getElementById("Classroom").value == "Select classroom") {
        alert("Classroom must be selected!");
        return false;
    }
// Her tjekkes der om text-feltet er tomt. Hvis ikke så fortsætter den. - Alex
    if (!document.getElementById("lectureName").value) {
        alert("Lecture name must be entered!");
        return false;
    }
    //Tjekkes om der er valgt en dag. Hvis dag ikke valgt, så alerter den, hvis valgt, så fortsætter den. - Alex
    if (document.getElementById("day").value == "Choose day") {
        alert("A day must be chosen!");
        return false;
    }

    //Validates that time is of a valid input.- Alex
    if (!document.getElementById("time").value) {
        alert("Please enter a valid number for the time of day");
        return false;
    }
    //Validates that time is of the correct format. - Alex
    if (!validateHhMm(document.getElementById("time"))) {
        alert("Please enter a valid time of the day");
        return false;
    }

    return true;
}
//Valideringen
/* Her oprettes en forelæsning som har andre variable end dem i localstorage, fordi funktionen ikke længere fungerede efter local storage.
Vi kunne heller ikke få forelæsning op i local storage, så har i stedet valgt at gøre det sådan her - Nik */
//der står to funktioner i den og den ene eksisterer ikke
function createLecture()
{
// Performs validation. -Alex
if (!validateCreateLecture()) {
    return;
}
    var teacher1 = document.getElementById("teacher1").value;
    var studyProgram1 = document.getElementById("studyProgram").value;
    var course1 = document.getElementById("course").value;
    var classRoom1 = document.getElementById("Classroom").value;
    var lectureName1 = document.getElementById("lectureName").value;
    var day1 = document.getElementById("day").value;
    var time1 = document.getElementById("time").value;
    var comment1 = document.getElementById("comment").value;
// Her alertes den forelæsning man opretter med informationerne om de hardcodede classrooms fra det andet js dokument - Nik
    alert("Your lecture has been created"
        + "\nTeacher: " + teacher1
        + "\nStudy program: " + studyProgram1
        + "\nCourse: " + course1
        + "\nClassroom: " + classRoom1 + " - " + test1   //test1 skal slettes?? gør at det ikke virker???
        + "\nLecture name: " + lectureName1
        + "\nDay: " + day1
        + "\nTime of lecture: " + time1
        + "\nAdditional comment: " + comment1);
}
// Denne funktion fjerne en lecture fra dropdown menuen med allerede oprettede forelæsninger - Nik
function removeLecture() {
    var x = document.getElementById("teacherLecture");
    x.remove(x.selectedIndex);
}

// Since studentlist is not defined in this js document, i had to define a new variable "Studentinformation". We can fetch the data of our students from the local storage, with the key student - Chris
function showStudentInformation() {
    var studentinformation = JSON.parse(localStorage.getItem("Student"));
    alert("Student Information:"
        + "\n name: "  + studentinformation[0].firstName + " " + studentinformation[0].lastName + "\n email: " + studentinformation[0].email
        + "\n name: "  + studentinformation[1].firstName + " " + studentinformation[1].lastName + "\n email: " + studentinformation[1].email
        + "\n name: "  + studentinformation[2].firstName + " " + studentinformation[2].lastName + "\n email: " + studentinformation[2].email
        + "\n name: "  + studentinformation[3].firstName + " " + studentinformation[3].lastName + "\n email: " + studentinformation[3].email
    )
}
/* Her er funktionen der kan fjerne en student fra en forelæsning. Én forelæsning har ingen tilmeldte students, så der kan ingen fjernes fra.
Andre har students, så man får vi listen over de students der er tilmeldt og kan fjerne en. Indtil videre fjerner det dem dog fra listen der er fælles for alle forelæsninger. - Nik */
function studentRemove() {
    var lectureStudent = document.getElementById("lectureRemoveStudent").value;
    if(lectureStudent == "Consumer surplus og producer surplus") {
        document.getElementById("studentListFunction").style.display = "none";
        alert("No students in this lecture");
    } else if (lectureStudent == "Lineær programmering") {
        document.getElementById("studentListFunction").style.display = "";
        console.log("Please select student to remove");
    } else if (lectureStudent == "Programmering - Guide til objekter"){
        document.getElementById("chris").style.display = "none";
        console.log("Only one student in this lecture");
    } else if (lectureStudent == "If statements og loops") {
        document.getElementById("studentListFunction").style.display = "";
        console.log("Please select student to remove");
    }
}
//Skal have ændret, så når man fjerne nogen fra en lecture, så bliver de ikke fjernet fra de andre lectures - Nik

/* Denne funktion hører til dropdown listen over tilmeldte students, og skal kun vises, hvis der er nogen der er tilmeldt.
Måske skal den gentages for hver forelæsning, så man ikke fjerner fra samme liste - Nik  */
function removeStudent() {
    var x = document.getElementById("studentList");
    x.remove(x.selectedIndex);
}

/** function showLecture() {
    console.log("Show localStorage");
    console.log(localStorage);
}
*/

//START PÅ VALIDATION - ALEX (DONT TOUCH)