function validate() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;
  var dob = document.getElementById("dob").value;
  var pin = document.getElementById("pin").value;
  if (name == "") {
    document.getElementById("name_error").innerHTML = "**Please enter name**";
    return false;
  }
  if (name.length <= 2 || name.length > 20) {
    document.getElementById("name_error").innerHTML =
      "**Please enter valid name**";
    return false;
  }
  if (!isNaN(name)) {
    document.getElementById("name_error").innerHTML =
      "**Only characters are allowed**";
    return false;
  }

  if (email == "") {
    document.getElementById("email_error").innerHTML = "**Please enter email**";
    return false;
  }
  if (email.indexOf("@") <= 0) {
    document.getElementById("email_error").innerHTML =
      "**Please enter valid email**";
    return false;
  }
  if (mobile == "") {
    document.getElementById("mob_error").innerHTML =
      "**Please enter mobile number**";
    return false;
  }
  if (isNaN(mobile)) {
    document.getElementById("mob_error").innerHTML =
      "**Please enter only digits**";
    return false;
  }
  if (mobile.length != 10) {
    document.getElementById("mob_error").innerHTML =
      "**Please enter valid 10 digit mobile number**";
    return false;
  }
  if (dob == "") {
    document.getElementById("dob_error").innerHTML =
      "**Please enter date of birth**";
    return false;
  }
  var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  if (!date_regex.test(dob)) {
    document.getElementById("dob_error").innerHTML =
      "**Please enter correct format mm/dd/yyyy**";
    return false;
  }
  if (pin == "") {
    document.getElementById("pin_error").innerHTML = "**Please enter pin**";
    return false;
  }
  if (pin.length != 6) {
    document.getElementById("pin_error").innerHTML =
      "**Please enter valid 6 digit pin**";
    return false;
  }
  if (isNaN(pin)) {
    document.getElementById("pin_error").innerHTML =
      "**Please enter only digits**";
    return false;
  }
}
