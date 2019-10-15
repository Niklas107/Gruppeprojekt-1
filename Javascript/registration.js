function Register() {
    var user_name = document.getElementById("user_name").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var comments = document.getElementById("comment").value;

    alert("You have been registered" +
        "\nuserName: " + user_name +
        "\nname: " + name +
        "\nemail: " + email +
        "\nphone: " + phone +
        "\npassword: " + "****" +
        "\nAdditional comment: " + comments);
}