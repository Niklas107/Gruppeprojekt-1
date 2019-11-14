// Klassenn Classroom er her opstillet med nogle attributter - Nik
class Classroom {
    constructor(size, location) {
        this.size = size;
        this.location = location;
    }
}


// Her er der hardcodet nogle classrooms som bruges i createLecture funktionen - Nik
//Det ville nok være smartere at push dem til et array
//Prøvede at lave det med array, men så blev de vist i en linje i dropdown
//Så det blev på den grimme måde i stedet med 5 hårde eksempler - Nik
/* Det her bliver ikke brugt længere - Nik
var classroomList = [];

classroomList.push(new Classroom("50", "Solbjerg Plads"));
classroomList.push(new Classroom("40", "Dalgas Have"));
classroomList.push(new Classroom("120", "Solbjerg Plads"));
classroomList.push(new Classroom("90", "Kilen"));
classroomList.push(new Classroom("50", "FLintholm"));
var classroomListString = JSON.stringify([classroomList]);
 */

//Den her skal være der før den virker
Classroom.prototype.toString = function classroomToString () {
    return "Classroom " + "Size: " + this.size + " Location: " + this.location;
}

room1 = new Classroom("50", "Solbjerg Plads");
room2 = new Classroom("40", "Dalgas Have");
room3 = new Classroom("120", "Solbjerg Plads");
room4 = new Classroom("90", "Kilen");
room5 = new Classroom("50", "Flintholm");
var room1String = JSON.stringify(room1);
var room2String = JSON.stringify(room2);
var room3String = JSON.stringify(room3);
var room4String = JSON.stringify(room4);
var room5String = JSON.stringify(room5);

var select = document.getElementById("chooseClassroom");
var options = ["Classroom 1: " + room1String, "Classroom 2: " + room2String, "Classroom 3: " + room3String, "Classroom 4: " + room4String, "Classroom 5: " + room5String];
for (var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}





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
/* Bliver ikke længere brugt da jeg fandt en smartere måde - Nik
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
 */


