// Efter siden bliver loaded vil første fokus være på User id feltet.
function firstfocus()
{
    var uid = document.registration.userid.focus();
    return true;
}
// Denne funktion validerer User id.
function userid_validation(mx,my)
{
    var uid = document.registration.userid;
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx)
    {
        alert("User Id should not be empty / length be between "+mx+" to "+my);
        uid.focus();
        return false;
    }
    // Fokus går til næste punkt, hvilket er Password
    document.registration.passid.focus();
    return true;
}
// Denne funktion vil validere password
function passid_validation(mx,my)
{
    var passid = document.registration.passid;
    var passid_len = passid.value.length;
    if (passid_len == 0 ||passid_len >= my || passid_len < mx)
    {
        alert("Password should not be empty / length be between "+mx+" to "+my);
        passid.focus();
        return false;
    }
    // Fokus går til næste punkt, hvilket er Name
    document.registration.username.focus();
    return true;
}
// Denne funktion vil validere Name
function allLetter()
{
    var uname = document.registration.username;
    var letters = /^[A-Za-z]+$/;
    if(uname.value.match(letters))
    {

        // Fokus går til næste punkt, hvilket er Main Course.
        document.registration.course.focus();
        return true;
    }
    else
    {
        alert('User address must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}
// Denne funktion vil vælge et main course
function courseselect()
{
    var ucourse = document.registration.ucourse;
    if(ucourse.value == "Default")
    {
        alert('Select your Course from the list');
        ucourse.focus();
        return false;
    }

// Denne funktion vil validere email
function ValidateEmail()
{
    var uemail = document.registration.email;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
        document.registration.desc.focus();
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }