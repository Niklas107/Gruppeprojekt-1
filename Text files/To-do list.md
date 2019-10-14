## **TO-DO list**

#### **User**

Lave register funktion under user

Undersøge om teacher, student og admin "inheritter"
attributterne fra user.

Hvis ja gør noget lignende, så teacher kan få informationerne fra student

#### **Get/set metoderne**

Ellers skal vi finde en måde hvor de forskellige klasser kan få informationer fra hinanden, da admin også skal have information om classroom og courses, og teacher skal have information om classroom.

Hvis ikke det kan lade sig gøre, kan vi overveje at samle alle user klasserne i et js dokument, og så finde en måde at classroom, courses og order kan virke 

#### **Admin**

Under admin skal der være mulighed for at lave en ny student og teacher. Om det er er new.teacher eller this.teacher og så oplysninger ved jeg ikke

Admin skal også kunne slette teachers eller students, så informationerne om de student og teachers, der er regristreret skal også gemmes et sted. 

#### **Classroom**

Lave klassen med contructor og kommentarer og lave en funktion der kan tjekke hvilke lokaler er tilgængelige, så teachers kan vide det.

#### **Courses**

Lave klassen med contructor og kommentarer og lave en funktion der kan tjekke hvilke fag de forskellige students og teachers har klaret, for at vide om de kan være en del af den samme forelæsning.


#### **Teacher**

Lave en funktion så de kan oprette en forelæsning

Lave en funktion så de kan fjerne en forelæsning

Lave en funktion så de kan tilføje en student til en forelæsning

Lave en funktion så de kan fjerne en student fra en forelæsning

Lave en funktion så de på deres profil kan ændre informationer om en forelæsning fx. tidspunkt, eller classroom.

#### **Student**

Lave en funktion så de kan tilmelde sig en forelæsning

Finde ud af om informationerne om student kan modtages af teacher, og om student kan få informationer fra courses.

 if (teacher.studyProgram==student.studyProgram) og  if (teacher.course==student.course) må de tilmelde sig en forelæsning

#### **Order**

Lave klassen med constructor og kommentarer og lave en funktion der kan udregne en pris for alle forelæsninger en student har tilmeldt sig. Og en funktion der laver/accepterer ordren eller tilmeldingen.

Alternativt skal denne klasse slettes og så kan students bare tilmelde sig en forelæsning, hvis det andet bliver for bøvlet.  

#### **Andet**

Vi skal have indsat de forskellige js dokumenter i vores html fil og lave css, så det er ens for alle "siderne". Altså så det eksempelvis ser ens ud for index.html og login.html





#### **Checklisten fra Hackathon 3**

 Strings, Numbers, Booleans and undefined values. Operators to combine and transform.
• Expressions and statements. Bindings. Functions. Return values. Control flow. Conditional
execution (if, else and switch). Looping (while, do and for).
• The function keyword. Defining functions. Bindings and scopes. Declaration. Arrow functions.
Understanding scopes. The call stack. Optional arguments. Recursion.
• Data sets. Properties. Methods. Objects. Mutability. Correlation. Array loops. Rest parameters.
Math. JSON. Iterate arrays.
• Abstraction. Filtering arrays. Transforming with map. Recognizing text.
• Encapsulation. Methods. Prototypes. Classes. Class notation. Overriding. Maps. Polymorphism.
Getters, setters and statics. Inheritance.
• Strict mode. Testing. Debugging. Error propagation. Exceptions. Assertions.