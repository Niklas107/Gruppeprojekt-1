Her skal vi flytte funktioner hen i stedet for at slette dem.
På den måde kan vi bruge dem når vi skal reflektere over vores process.

Her kan vi også skrive vores diskussioner om funktioner og andet, som kan bruges i refleksion i rapporten.

Hvis vi kopierer skal vi skrive referencer og bruge APA-modellen

Slå op i bogen efter begreber når vi skriver kommentarer til vores kode

Objekt orienteret programmering side 426 i bogen


Vi har fjernet course.js, fordi den ikke længere bliver brugt til noget efter vi indførte localstorage:
// Klassenn Course er her opstillet med nogle attributter - Nik
class course {
    constructor(studyProgram, semester) {
        this.studyProgram = studyProgram;
        this.semester = semester;
    }
}
// Her er der hardcodet nogle forskellige courses som skulle have virket i student og teacher i createLecture og joinLecture - Nik
BIS = new course ("HA(it.)", "1");
VØS = new course ("HA(it.)", "1");
ORG = new course("HA(it.)", "1");
PRO = new course("HA(it.)", "1");
REG = new course("HA(it.)", "2");
ITP = new course("HA(it.)", "2");
PRO2 = new course("HA(it.)", "2");
ORG2 = new course("HA(it.)", "2");
console.log(BIS);

Forsøg med at alert at der ikke er flere students, når man har fjernet alle
   var select = document.getElementById("lecturesTeacher1");
    if(select.options.length > 0) {
        alert("No students in this lecture");
    }

Hvis jeg kunne lave én knap i stedet for tre forskellige af den samme knap:
} else if (x == "2" || "3" || "4") {
        document.getElementById("removeButton").style.display = "block"; 
Så skal man også bruge querySelector når det er mere end et id:
function removeStudent() {
    var x = document.querySelectorAll('#studentsIn2, #studentsIn3, #studentsIn4');
    
    
Den her fjernes fra teache.js, og i stedet indsættes den funktion jeg lavede lokalt d. 05-11:
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