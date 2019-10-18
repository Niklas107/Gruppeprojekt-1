//Different variables needed in our registration form
function Register() {
    var userName = document.getElementById("userName").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var comments = document.getElementById("comment").value;

}
//Store input from registration to localStorage
function storeLogin() {
        localStorage.setItem("userName", userName.value);
        localStorage.setItem("name", name.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("phone", phone.value);
        localStorage.setItem("comment", comment.value);
 alert("You have been registered"
        + "\nuserName: " + userName
        + "\nname: " + name
        + "\nemail: " + email
        + "\nphone: " + phone
        + "\npassword: " + "****"
        + "\nAdditional comment: " + comment);
}

function showUser () {
    console.log("Show user stored in localStorage.")
    console.log(localStorage);
}