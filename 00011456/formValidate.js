// Main Function
function validateFormOnSubmit(contact) {
  reason = "";
  reason += validateName(contact.name);
  reason += validateEmail(contact.email);
  reason += validatePhone(contact.phone);

  console.log(reason);
  if (reason.length > 0) {
    return false;
  } else {
    return false;
  }
}

// Triming white space
function trim(input) {
  return input.replace(/^\s+|\s+$/, "");
}

// Name Validation
function validateName(name) {
  let error = "";

  if (name.value.length == 0) {
    name.style.background = "#990000";
    document.getElementById("name-error").innerHTML =
      "The required field has not been filled in";
    error = "1";
  } else if ((name.value = " ")) {
    name.style.background = "#990000";
    document.getElementById("name-error").innerHTML = "It cant be empty";
    error = "1";
  } else {
    name.style.background = "#fff";
    document.getElementById("name-error").innerHTML = "";
  }
  return error;
}

// Phone Validate
function validatePhone(phone) {
  var error = "";

  if (phone.value == "") {
    document.getElementById("phone-error").innerHTML =
      "Please enter a phone number. It cannot be a empty";
    phone.style.background = "#990000";
    var error = "6";
  } else {
    phone.style.background = "White";
    document.getElementById("phone-error").innerHTML = "";
  }
  return error;
}

// Email Validation
function validateEmail(email) {
  var error = "";
  var temail = trim(email.value); // value of field with whitespace trimmed off
  // StackOverflow`s RegEx
  var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;

  if (email.value == "") {
    email.style.background = "#990000";
    document.getElementById("email-error").innerHTML =
      "Please enter an email address. It cannot be a empty";
    var error = "2";
  } else if (!emailFilter.test(temail)) {
    //test email for illegal characters using regular expressions which were copyied on stackoverflow caz i am not crazy to learn regex))
    email.style.background = "#990000";
    document.getElementById("email-error").innerHTML =
      "Please enter a valid email address.";
    var error = "3";
  } else {
    email.style.background = "White";
    document.getElementById("email-error").innerHTML = "";
  }
  return error;
}
