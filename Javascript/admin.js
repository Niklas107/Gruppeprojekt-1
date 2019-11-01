class User {                                                                   //Klassen user er blot overklasse som de andre klasser inheriter fra
    constructor(userName, password, email, phoneNumber, firstName, lastName) {  //Her er alle de attributter som alle classes skal bruge
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.firstName= firstName;
        this.lastName = lastName;
    }
}

class Admin extends User {                                                                   // Vi extender fra user
    constructor(userName, password, email, phoneNumber, firstName, lastName) {   // Alle attributter til admin
        super(userName, password, email, phoneNumber, firstName, lastName);
    }
}



//Local Storage in order to make a admin able to log in.
console.log(localStorage.getItem("Admin"));
var adminList = [];

if (localStorage.getItem("Admin") == null) {

    adminList.push(new Admin("","","","","","",""));
    var adminListString = JSON.stringify(adminList);
    localStorage.setItem('Admin', adminListString)

} else {
    adminList = JSON.parse(localStorage.getItem('Admin'))
}

/** function delete() {
    var x = document.getElementById("DeleteStudent");
    x.remove(x.selectedIndex);
}
*/
function deleteStudent() {
    var x = document.getElementById("allStudents");
    x.remove(x.selectedIndex);
}

function deleteLecture() {
    var x1 = document.getElementById("allLectures");
    x1.remove(x1.selectedIndex);
}




//Lav en removeTeacher og removeStudent funktion

//Harcode én bruger, som er admins' login
//