function validate(e) {
    resetForm()
    if (formHasErrors()) {
        e.preventDefault();
        return false;
    }

    return true;
}

function resetForm(e) {

    document.getElementById("name").focus();
    document.getElementById("name").placeholder = "";
    document.getElementById("phone").placeholder = "";
    document.getElementById("email").placeholder = "";
    document.getElementById("name").style.backgroundColor = "#1FA6A619";
    document.getElementById("phone").style.backgroundColor = "#1FA6A619";
    document.getElementById("email").style.backgroundColor = "#1FA6A619";
    return true;


}

function formHasErrors() {
    var error = false;

    //testing required inputs
    let requiredInputFields = ["name", "phone", "email"];
    for (let i = 0; i < requiredInputFields.length; i++) {
        var input = document.getElementById(requiredInputFields[i]);
        if (input.value == "") {
            input.placeholder = "This is a required field!";
            input.style.backgroundColor = "#F2300519";
            if (!error) {
                input.focus();
                input.select();
            }
            error = true;
        }
    }

    //phone validation
    let phoneInput = document.getElementById("phone");
    if (isNaN(parseInt(phoneInput.value))) {
        phoneInput.value = "";
        phoneInput.placeholder = "Phone number is invalid.";
        phoneInput.style.backgroundColor = "#F2300519";
        if (!error) {
            phoneInput.focus();
            phoneInput.select();
        }
        error = true;
    }

    //email validation
    regex = new RegExp(/^[\w-]+@([\w-]+\.)+([^@])[\w-]+$/); 
    let emailInput = document.getElementById("email");
    if (!regex.test(emailInput.value)) {
        emailInput.value = "";
        emailInput.placeholder = "You must use a valid email.";
        emailInput.style.backgroundColor = "#F2300519";
        if (!error) {
            emailInput.focus();
            emailInput.select();
        }
        error = true;
    }

    return error;
}

function load() {
    document.getElementById("contactForm").addEventListener("submit", validate);
    document.getElementById("contactForm").addEventListener("reset", resetForm);
}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);