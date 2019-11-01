class Classroom {
    constructor(size, location) {               //Attributter opstillet som courses skal bruge
        this.size = size;
        this.location = location;
    }
}
room1 = new Classroom("50", "Solbjerg Plads");
room2 = new Classroom("40", "Dalgas Have");
room3 = new Classroom("120", "Solbjerg Plads");
room4 = new Classroom("90", "Kilen");
room5 = new Classroom("50", "Flintholm");
var test1 = JSON.stringify(room1);


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

