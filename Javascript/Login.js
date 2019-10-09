function clicked() {
    var user = document.getElementById("username");
    var pass = document.getElementById("password");
    var correctUser = "test";
    var correctPassword = "123";
    if (user.value == correctUser) {
        if (pass.value == correctPassword) {
            alert("you are logged in ");
        }
        else
            {
                alert("Incorrect username or password");
            }
        }
    else {
        alert("Incorrect username or password");
    }
    }