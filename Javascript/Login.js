var login = document.getElementById('login');
var existingStudent = JSON.parse(localStorage.getItem('Student'));

login.onclick = function() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    for (let i = 0; i < existingStudent.length; i++) {
        if (user == existingStudent[i].userName && pass == existingStudent[i].password) {
            alert("you are logged in");
            //document.location.href = "HTML PAGE";
            return true;
        } else {
            alert("Incorrect username or password");
        }
    }
}













