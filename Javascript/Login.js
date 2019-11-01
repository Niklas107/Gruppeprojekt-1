var login = document.getElementById('login');
var existingStudent = JSON.parse(localStorage.getItem('Student'));
var existingTeacher = JSON.parse(localStorage.getItem("Teacher"));
login.onclick = function() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    for (let i = 0; i < existingStudent.length; i++) {
        if (user == existingStudent[i].userName && pass == existingStudent[i].password) {
            alert("You are logged in as a student");
            //document.location.href = "HTML PAGE";
            return true;
        }

    }
    for (let h = 0; h < existingTeacher.length; h++) {
        if (user == existingTeacher[h].userName && pass == existingTeacher[h].password) {
            alert("You are logged in as a Teacher");
            //document.location.href = "HTML PAGE";
            return true;
        }
        }
        alert("Incorrect username or password");
    }