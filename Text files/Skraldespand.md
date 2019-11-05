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