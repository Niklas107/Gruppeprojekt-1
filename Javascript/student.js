/*class student extends user {                                                                                                    //Vi extender vores værdier fra User
    constructor(userName, password, email, phoneNumber, firstName, lastName, studyProgram, course, semester) {
        super(userName, password, email, phoneNumber, firstName, lastName);                                                       //Vi bruger super-funktionen.

        this.studyProgram = studyProgram;                                                                                         // Vi tilføjer tre nye attributter, som kun skal benyttes hos student
        this.course = course;
        this.semester = semester;
    }
}*/

var programDropdown = document.getElementById("selectStudyProgram")
programDropdown.onchange = function() {
    if(programDropdown.value == "HA(it.)"){
        console.log(document.getElementsByClassName("HA(it.)"))

    }
}

function chooseCourse() {
    var studyprogram = document.getElementsByClassName("category_div").value;
    var lecture = document.getElementsByClassName("sub_category_div").value;
    var lectureTime = document.getElementsByClassName("sub_subcategory_div").value;
    var comment = document.getElementById("comment").value;

    alert("You have joined a lecture"
        + "\nStudy Program: " + studyprogram
        + "\nLecture: " + lecture
        + "\nLecture Time: " + lectureTime
        + "\nAdditional comment:" + " " + comment);
}



//Niklas = new student("Niller", "12345", "Nik123@gmail.com", "12345678", "Niklas","jh",""," ",""  );
//console.log(Niklas);









// https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript