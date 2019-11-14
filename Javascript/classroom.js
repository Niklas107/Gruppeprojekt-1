// Klassenn Classroom er her opstillet med nogle attributter - Nik
class Classroom {
    constructor(size, location) {
        this.size = size;
        this.location = location;
    }
}


// Her er der hardcodet nogle classrooms som bruges i createLecture funktionen - Nik
//Det ville nok være smartere at push dem til et array
var classroomList [];
classroomList.push(new Classroom("50", "Solbjerg Plads");
classroomList.push(new Classroom("40", "Dalgas Have");
classroomList.push(new Classroom("120", "Solbjerg Plads");
classroomList.push(new Classroom("90", "Kilen");
classroomList.push(new Classroom("50", "FLintholm");
var classroomListString = JSON.stringify(classroomList);

/* Disse kommenteres ud da jeg forsøger at gøre ligesom med de andre harcodede eksempler vi har. - Nik
room1 = new Classroom("50", "Solbjerg Plads");
room2 = new Classroom("40", "Dalgas Have");
room3 = new Classroom("120", "Solbjerg Plads");
room4 = new Classroom("90", "Kilen");
room5 = new Classroom("50", "Flintholm");
Det her skal opdateres, men skulle gerne gøre de hardcodede classrooms til strings, så de kan være med i alerten når man opretter en forelæsning.
Hvis det kommer til at virke, skal det indgå i createLecture funktionen i stedet for at console.log dem - Nik
var test1 = JSON.stringify(room1); */

// Denne funktion console.logger det valgte classroom, så når man opretter en forelæsning, kan man se informationerne om det valgte classroom - Nik
function getSelectClassroom() {
    var selectedClassroom = document.getElementById("Classroom").value;
    if (selectedClassroom === "room1") {
        console.log(room1);
    } else if (selectedClassroom === "room2") {
        console.log(room2);
    } else if (selectedClassroom === "room3") {
        console.log(room3);
    } else if (selectedClassroom === "room4") {
        console.log(room4);
    } else if (selectedClassroom === "room5") {
        console.log(room5);
    }
}


