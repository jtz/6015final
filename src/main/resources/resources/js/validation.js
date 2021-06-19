let error = document.getElementById("error");

function validateForm() {

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const contact = document.getElementsByName("contact");
    const showMsg = document.getElementsByName("showMsg");
    const message = document.getElementById("subject");

    return checkName(name) && checkEmail(email) && checkShowMsg(showMsg) && checkContact(contact) && checkMessage(message);
}

// Validate the input to ensure a min length of 3 and a max length of 30
const checkLength = element => {
    if (element.value.length < 3 || element.value.length > 30) {
        error.innerHTML = `Sorry: The length of ${element.name} must be between 3 and 30.`;
        element.focus();
        return false;
    } else {
        return true;
    }
};

// Validate name to ensure only alpha characters (A-Z and a-z) and space are used
const checkName = element => {
    const lettersAndSpace = /^[A-Za-z ]+$/;
    checkLength(element);
    if (!element.value.match(lettersAndSpace)) {
        error.innerHTML = "Sorry: Name must contain alpha characters and space only.";
        element.focus();
        return false;
    } else {
        return true;
    }
};

// Validate email according to RFC2822 standard email validation
const checkEmail = element => {
    checkLength(element);
    const rfc2822 = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (!element.value.match(rfc2822)) {
        error.innerHTML = "Sorry: Email is not valid.";
        element.focus();
        return false;
    } else {
        return true;
    }
};

// Validate showMsg to ensure radio button is checked
const checkShowMsg = element => {
    for (let i = 0; i < element.length; i++) {
        if (element[i].checked) {
            return true;
        }
    }
    error.innerHTML = "Sorry: Show message or not must be chosen.";
    element.focus();
    return false;
};

// Validate contact ways to ensure check boxes are checked
const checkContact = element => {
    for (let i = 0; i < element.length; i++) {
        if (element[i].checked) {
            return true;
        }
    }
    error.innerHTML = "Sorry: Contact ways must be chosen.";
    element.focus();
    return false;
};

// Validate text area to ensure the length is no more than 800 words
const checkMessage = element => {
    let value = element.value;
    value = value.replace(/(^\s*)|(\s*$)/gi,"");
    value = value.replace(/[ ]{2,}/gi," ");
    value = value.replace(/\n /,"\n");
    if (value.split(" ").length > 800) {
        message.innerHTML = "Sorry: The length of message must be within 800.";
        element.focus();
        return false;
    } else {
        return true;
    }
};