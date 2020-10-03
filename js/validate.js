var password = document.getElementById("user_password"),
    confirm_password = document.getElementById("confirm_user_password"),
    email = document.getElementById("user_email"),
    confirm_email = document.getElementById("confirm_user_email"),
    investor = document.getElementById("set_investor"),
    citizen = document.getElementById("set_citizen");

function validatePassword(){
    if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
    }
}

function validateEmail(){
    if(email.value != confirm_email.value) {
        confirm_email.setCustomValidity("Email don't Match");
    } else {
        confirm_email.setCustomValidity('');
    }
}

function validateInvestor(){
    if (( investor.checked != true ) && ( citizen.checked == true )) {
        investor.setCustomValidity("Citizens of US, China or Singapore are not allowed to participate unless they are accredited investors.");
        citizen.setCustomValidity("Citizens of US, China or Singapore are not allowed to participate unless they are accredited investors.");
    } else {
        investor.setCustomValidity("");
        citizen.setCustomValidity("");
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

email.onchange = validateEmail;
confirm_email.onkeyup = validateEmail;

investor.onclick = validateInvestor;
citizen.onclick = validateInvestor;