class teacher extends user {                                                                     // Vi extender fra user
    constructor(userName, password, email, phoneNumber, firstName, lastName, studyProgram) {     // Alle attributter til teacher
        super(userName, password, email, phoneNumber, firstName, lastName);                      // Vi opstiller en super-funktion

        this.studyProgram = studyProgram;                                                        //Ekstra attributter som er opstillet til teacher
    }
}


function createLecture() {
      var teacher = document.getElementById("teacher").value;
      var studyProgram = document.getElementById("studyProgram").value;
      var course = document.getElementById("course").value;
      var classroom = document.getElementById("classroom").value;
      var lectureName = document.getElementById("lectureName").value;
      var day = document.getElementById("day").value;
      var time = document.getElementById("time").value;
      var comment = document.getElementById("comment").value;

      alert("Your lecture has been created"
          + "\nteacher: " + teacher
          + "\nstudy program: " + studyProgram
          + "\ncourse: " + course
          + "\nclassroom: " + classroom
          + "\nlecture Name: " + lectureName
          + "\nday: " + day
          + "\ntime of lecture: " + time
          + "\nadditional comment: " + comment);
  }

// create an array
var lectureList = ["LP intro","Programmering - Guide til objekter","Organisationskultur - eksamensforberedelse"];

function pushLecture() {
    // get value from the input text
    var lectureName = document.getElementById('lectureName').value;

    // append data to the array
    lectureList.push(lectureName);

    var pval = "";

    for(i = 0; i < lectureList.length; i++)
    {
        pval = pval + lectureList[i] + "<br/>";
    }

    // display array data
    document.getElementById('lName').innerHTML = pval;
}

(function() {
    function IDGenerator() {

        this.length = 8;
        this.timestamp = +new Date;

        var _getRandomInt = function( min, max ) {
            return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
        }

        this.generate = function() {
            var ts = this.timestamp.toString();
            var parts = ts.split( "" ).reverse();
            var id = "";

            for( var i = 0; i < this.length; ++i ) {
                var index = _getRandomInt( 0, parts.length - 1 );
                id += parts[index];
            }

            return id;
        }


    }


    document.addEventListener( "DOMContentLoaded", function() {
        var btn = document.querySelector( "#generate" ),
            output = document.querySelector( "#output" );

        btn.addEventListener( "click", function() {
            var generator = new IDGenerator();
            output.innerHTML = generator.generate();

        }, false);

    });


})();

function removeLecture() {
    var x = document.getElementById("hejsa");
    x.remove(x.selectedIndex);
}

  /*pushLecture virker kun i script tags i html filen. Når det virker i JS er næste step at få resultatet
  fra lectureList ind i select formen, for at kunne remove en af dem, eller lave en måde at kigge det array
  igennem, og fjerne den lecture i arrayet, som man vil fjerne.
   */

  //Måske en knap der viser alle items i array (show your lectures)
//derefter en simpel pop funktion der alt efter hvad man skriver, fjerne den rigtige i arrayet?
//^^Choose a lecture to remove

const testList = [
    {name: 'LP intro', id: 1 },
    {name: 'Programmering - Guide til objekter', id: 2},
    {name: 'Organisationskultur - eksamensforberedelse', id: 3},
    {name: 'En forelæsning om druk på CBS', id: 4},
    {name: 'Verdens bedste VØS guide', id: 5},
    {name: 'En fordybelse i magt begreber', id: 6}

]

const filteredTestList = testList.filter((testList) => {
    return testList.id <= 2
})

console.log(testList)
console.log(testLectureList)

//Den her kode kan måske bruges? Her kan jeg vælge en med et bestemt ID der fjernes. Så skal den bare kunne forbindes med de andre funktioner






/*Lave en funktion så de kan fjerne en forelæsning

Lave en funktion så de kan tilføje en student til en forelæsning

Lave en funktion så de kan fjerne en student fra en forelæsning

Lave en funktion så de på deres profil kan ændre informationer om en forelæsning fx. tidspunkt, eller classroom. */
