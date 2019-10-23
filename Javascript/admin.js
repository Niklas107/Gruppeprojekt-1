class Admin extends User {                                                                   // Vi extender fra user
    constructor(userName, password, email, phoneNumber, firstName, lastName) {   // Alle attributter til admin
    }
    }


//Local Storage in order to make a admin able to log in.
console.log(localStorage.getItem("Admin"))
var adminList = []

if (localStorage.getItem("Admin") == null) {

    adminList.push(new Admin("","","","","","","");
    var adminListString = JSON.stringify(adminList)
    localStorage.setItem('Admin', adminListString)

} else {
    adminList = JSON.parse(localStorage.getItem('Admin'))
}

function delete() {
    var x = document.getElementById("DeleteStudent");
    x.remove(x.selectedIndex);
}








//Lav en removeTeacher og removeStudent funktion

//Opret én bruger, som er admins' login
//