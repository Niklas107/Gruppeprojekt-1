function Register() {
    var name = document.getElementById("user_name").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var comments = document.getElementById("comment").value;

    alert("You have been registered" +
        "\nName: " + name +
        "\naddress: " + address +
        "\nemail: " + email +
        "\nphone: " + phone +
        "\npassword: " + "****" +
        "\nAdditional comment: " + comments);
}