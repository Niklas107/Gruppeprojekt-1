    var userName = document.getElementById("userName");

    var fullName = document.getElementById("fullName");

    var email = document.getElementById("email");

    var phone = document.getElementById("phone");

    var comment = document.getElementById("comment");

    var password = document.getElementById("password");

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

    console.log(fullName.value);
}


/*
function showUser () {

    console.log("Show user stored in localStorage.")

    console.log(localStorage);
*/
//validation form

    function validateContactInformation() {
        var form_valid = true;
        var validation_message = "";

        if (userName.value == null || userName.value == ""){
            validation_message += "Username must be filled in! \n";
            form_valid = false; }

        if (fullName.value == null || fullName.value == ""){
                validation_message += "fullName must be filled in! \n";
                form_valid = false; }

        var atpos = email.value.indexOf("@");
        var dotpos = email.value.lastIndexOf(".");
        if (atpos<1||dotpos < atpos + 2 || dotpos + 2 > email.lenght){
            validation_message += "Please enter a valid email \n";
            form_valid = false;}

        if (isNaN(phone.value)){
            validation_message += "Phonenumbers can only consist of numbers! \n";
            form_valid = false;}
        else if (phone.value == null || phone.value == "") {
            validation_message += "Please enter a phone number \n";
            form_valid = false ;}

        if (password.value == null || password.value == ""){
            validation_message += "Password must be filled in! \n";
            form_valid = false; }

        if (form_valid) {
            alert("You have been registered"

                + "\nuserName: " + userName.value

                + "\nname: " + fullName.value

                + "\nemail: " + email.value

                + "\nphone: " + phone.value

                + "\npassword: " + "****"

                + "\nAdditional comment: " + comment.value);
        }
        else {
            alert(validation_message);

            }
        return (form_valid);

    }
