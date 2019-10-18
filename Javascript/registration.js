 var userName = document.getElementById("userName");
 var fullName = document.getElementById("fullName");
 var email = document.getElementById("email");
 var phone = document.getElementById("phone");
var comment = document.getElementById("comment");

//Different variables needed in our registration form
function Register() {
    this.userName = document.getElementById("userName").value;
    this.name = document.getElementById("name").value;
    this.email = document.getElementById("email").value;
    this.phone = document.getElementById("phone").value;
    this.comment = document.getElementById("comment").value;

}

//Store input from registration to localStorage
function storeLogin() {
        localStorage.setItem("userName", userName.value);
        localStorage.setItem("name", fullName.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("phone", phone.value);
        localStorage.setItem("comment", comment.value);
        console.log(fullName.value)
 alert("You have been registered"
        + "\nuserName: " + userName.value
        + "\nname: " + fullName.value
        + "\nemail: " + email.value
        + "\nphone: " + phone.value
        + "\npassword: " + "****"
        + "\nAdditional comment: " + comment.value);
}

function showUser () {
    console.log("Show user stored in localStorage.")
    console.log(localStorage);
}