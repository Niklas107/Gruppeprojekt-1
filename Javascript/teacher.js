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

    if (!document.getElementById("lectureName").value) {
        alert("Lecture name must be entered!");
        return false;
    }

    //Validate that time is of a valid input.- Alex
    if (!document.getElementById("time").value) {
        alert("Please enter a valid number for the time of day");
        return false;
    }
    //Validate that time is of the correct format. - Alex
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
/* Her fik jeg hjælp af min til block og none delen
Men lad mig forklare. previousHidden er et array, hvor vi senere pusher elementer ind der skal være hidden - Nik */
var previousHidden = [];
function selectStudentsInLectures() {
    // Her laves en variabel prev der gør at de ting der står i arrayet previousHidden er hidden ligesom i css dokumentet - Nik
    for (var prev of previousHidden) {
        prev.style.display = "none";
    }
    // Her søger vi efter den value man vælger i første dropdown - Nik
    var x = document.getElementById("lecturesTeacher1").value;
    // Hvis x er 1 alerter den at der ingen student er for denne forelæsning, da der ikke er nogen tilmeldt her - Nik
    if (x == "1") {
        alert("No students in this lecture");
        /* Ved de næste tre values blockerer den deres hidden tilstand mens det er den value der er valgt i første dropdown liste
        Derefter pushes de ind i arrayet så de er hidden igen når man vælger en anden value i første dropdown - Nik */
    }else if (x == "2") {
        var x = document.getElementById("studentsIn2");
        x.style.display = "block";
        previousHidden.push(x);
        var y = document.getElementById("removeButton2");
        y.style.display = "block";
        previousHidden.push(y);
    }else if (x == "3") {
        var x = document.getElementById("studentsIn3");
        x.style.display = "block";
        previousHidden.push(x);
        var y = document.getElementById("removeButton3");
        y.style.display = "block";
        previousHidden.push(y);
    }else if (x == "4") {
        var x = document.getElementById("studentsIn4");
        x.style.display = "block";
        previousHidden.push(x);
        var y = document.getElementById("removeButton4");
        y.style.display = "block";
        previousHidden.push(y);
    }else {
        alert("Select a lecture to show its students");
    }
}

/* De følgende funktion hører til dropdown listen over tilmeldte students. Jeg ville gerne kunne gøre det med en knap, der bruger det id der svarer til den dropdownlist man er i. - Nik  */
function removeStudent2() {
    var x = document.getElementById("studentsIn2");
    x.remove(x.selectedIndex);
}
function removeStudent3() {
    var x = document.getElementById("studentsIn3");
    x.remove(x.selectedIndex);
}
function removeStudent4() {
    var x = document.getElementById("studentsIn4");
    x.remove(x.selectedIndex);
}

/** function showLecture() {
    console.log("Show localStorage");
    console.log(localStorage);
}
*/

//START PÅ VALIDATION - ALEX (DONT TOUCH)