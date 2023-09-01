const Validate=()=>{
    // input fields
    let firstName = document.register.firstName;
    let lastName = document.register.lastName;
    let date = document.register.date;
    let gender = document.register.gender;
    let country = document.register.country;
    let state = document.register.state;
    let town = document.register.town;
    let phone_Number1 = document.register.phone_Number1;
    let phone_Number2 = document.register.phone_Number2;
    let email = document.register.email;

    // error validations
    let firstNameError = document.getElementById("firstNameError");
    let lastNameError = document.getElementById("lastNameError");
    let dateError = document.getElementById("dateError");
    let genderError = document.getElementById("genderError");
    let countryError = document.getElementById("countryError");
    let stateError = document.getElementById("stateError");
    let townError = document.getElementById("townError");
    let phone_Number1Error = document.getElementById("phone_Number1Error");
    let phone_Number2Error = document.getElementById("phone_Number2Error");
    let emailError = document.getElementById("emailError");


    // validating the first name
    if(firstName.value == ""){
        firstName.style.border = "2px solid red";
        firstNameError.textContent = "first name is required"
        firstNameError.style = "color:red; fontsize:1px; font-family:sans-serif;"
        firstName.focus();
        return false;
     }
     else if(firstName.value.length<2){
        firstName.style.border = "2px solid red";
        firstNameError.textContent = "firstname should not be less than 2 characters"
        firstNameError.style = "color:red; fontsize:1px; font-family:sans-serif;"
        firstName.focus();
        return false;
     }
     else if(firstName.value.length>255){
        firstName.style.border = "2px solid red";
        firstNameError.textContent = "first name must be at least 255 characters"
        firstNameError.style = "color:red; fontsize:1px; font-family:sans-serif;"
        firstName.focus();
        return false;
     }
     let firstNameRegex = /^[A-Za-z]+$/;
    if (!firstName.value.match(firstNameRegex)) {
      firstName.style.border = "2px solid red";
      firstNameError.textContent = "First name must not have numeric characters";
      firstNameError.style =
        "color: red; fontsize:.5px; font-size:Helvetical, Arial,sans-serif";
      firstName.focus();
      return false;
    }
     else {
        firstName.style.border = "2px solid green";
        firstNameError.textContent = ""
        firstNameError.style = ""
        lastName.focus();
     }

     // validating the first name
     if(lastName.value == ""){
        lastName.style.border = "2px solid red";
        lastNameError.textContent = "last name is required"
        lastNameError.style = "color:red; fontsize:1px; font-family:sans-serif;"
        lastName.focus();
        return false;
     }
     else if(lastName.value.length<2){
        lastName.style.border = "2px solid red";
        lastNameError.textContent = "lastName should not be less than 2 characters"
        lastNameError.style = "color:red; fontsize:1px; font-family:sans-serif;"
        lastName.focus();
        return false;
     }
     else if(lastName.value.length>255){
        lastName.style.border = "2px solid red";
        lastNameError.textContent = "Last name must be at least 255 characters"
        lastNameError.style = "color:red; fontsize:1px; font-family:sans-serif;"
        lastName.focus();
        return false;
     }
     let lastNameRegex = /^[A-Za-z]+$/;
    if (!lastName.value.match(lastNameRegex)) {
      lastName.style.border = "2px solid red";
      lastNameError.textContent = "Last name must not have numeric characters";
      lastNameError.style =
        "color: red; fontsize:.5px; font-size:Helvetical, Arial,sans-serif";
      lastName.focus();
      return false;
    }
     else {
        lastName.style.border = "2px solid green";
        lastNameError.textContent = ""
        lastNameError.style = ""
        lastName.focus();
     }

    //  validating date
    if(date.value == ""){
        date.style.border = "2px solid red";
        dateError.textContent = "last name is required"
        dateError.style = "color:red; fontsize:1px; font-family:sans-serif;"
        date.focus();
        return false;
     }
    //  formatting date
    let dateRegex = /^\d{2}\/\d{2}\/\d{2}$/;
  if (!dateRegex.test(dob)) {
    dob.style.border = "2px solid red";
    dobError.textContent = "Invalid date format (YY/MM/DD)";
    dobError.style.color = "red";
    dobError.style.fontSize = "12px";
    dobError.style.fontFamily = "sans-serif";
    dob.focus();
    return false;
  }

//   validating gender
if(gender.value == ""){
    gender.style.border = "2px solid red";
    genderError.textContent = "gender is required"
    genderError.style = "color:red; fontsize:1px; font-family:sans-serif;"
    gender.focus();
    return false;
 }
 else {
    gender.style.border = "2px solid green";
    genderError.textContent = ""
    genderError.style = ""
    country.focus();
 }

//  VALIDATING COUNTRY
if(country.value == ""){
    country.style.border = "2px solid red";
    countryError.textContent = "country is required"
    countryError.style = "color:red; fontsize:1px; font-family:sans-serif;"
    country.focus();
    return false;
 }
 else {
    country.style.border = "2px solid green";
    countryError.textContent = ""
    countryError.style = ""
    country.focus();
 }
//  VALIDATING District
if(district.value == ""){
    district.style.border = "2px solid red";
    districtError.textContent = "district is required"
    districtError.style = "color:red; fontsize:1px; font-family:sans-serif;"
    district.focus();
    return false;
 }
 else {
    district.style.border = "2px solid green";
    districtError.textContent = ""
    districtError.style = ""
    town.focus();
 }



//  validating town
if(town.value == ""){
    town.style.border = "2px solid red";
    townError.textContent = "town is required"
    townError.style = "color:red; fontsize:1px; font-family:sans-serif;"
    town.focus();
    return false;
 }
 else {
    town.style.border = "2px solid green";
    townError.textContent = ""
    townError.style = ""
    zipcode.focus();
 }

//  validating phone number 1
if(phone_Number1.value == ""){
    phone_Number1.style.border = "2px solid red";
    phone_Number1Error.textContent = "phone_Number1 is required"
    phone_Number1Error.style = "color:red; fontsize:1px; font-family:sans-serif;"
    phone_Number1.focus();
    return false;
 }
 else {
    phone_Number1.style.border = "2px solid green";
    phone_Number1Error.textContent = ""
    phone_Number1Error.style = ""
    phone_Number2.focus();
 }
//  validating phone number 
if(phone_Number2.value == ""){
    phone_Number2.style.border = "2px solid red";
    phone_Number2Error.textContent = "phone_Number2 is required"
    phone_Number2Error.style = "color:red; fontsize:1px; font-family:sans-serif;"
    phone_Number2.focus();
    return false;
 }
 else {
    phone_Number2.style.border = "2px solid green";
    phone_Number2Error.textContent = ""
    phone_Number2Error.style = ""
    email.focus();
 }
//  validating email 
if(email.value == ""){
    email.style.border = "2px solid red";
    emailError.textContent = "email is required"
    emailError.style = "color:red; fontsize:1px; font-family:sans-serif;"
    email.focus();
    return false;
 }
 else {
    email.style.border = "2px solid green";
    emailError.textContent = ""
    emailError.style = ""
    email.focus();
 }


}

