function validation() {
  var username = document.getElementById("uname");

  var password = document.getElementById("pass");

  var emil = document.getElementById("#el");

  if (username.value == "" || password.value == "" || email.value == "") {
    alert("no blank values");
    return false;
  } else {
    true;
  }
}
