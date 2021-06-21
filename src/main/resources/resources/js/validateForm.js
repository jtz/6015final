let error = document.getElementById("error");

function validateForm() {

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const contact = document.getElementsByName("contact");
    const showmsg = document.getElementsByName("showmsg");
    const message = document.getElementById("msg");

    return checkLength(name) && checkName(name) && checkEmail(email) && checkPhone(phone)
        && checkContact(contact) && checkShowMsg(showmsg) && checkMessage(message);
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
    const rfc2822 = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (!element.value.match(rfc2822)) {
        error.innerHTML = "Sorry: Email is not valid.";
        element.focus();
        return false;
    } else {
        return true;
    }
};

// Validate phone to ensure the format +1(012)345-6789 is matched
const checkPhone = element => {
    checkLength(element);
    const phoneFormat = /[+]\d[(]\d{3}[)]\d{3}[\-]\d{4}/g;
    if (!element.value.match(phoneFormat)) {
        error.innerHTML = "Sorry: Phone number must be +1(012)345-6789 format.";
        element.focus();
        return false;
    } else {
        return true;
    }
};

// Validate contact ways to ensure check boxes are checked
const checkContact = element => {
    for (let i = 0; i < element.length; i++) {
        if (element[i].checked) {
            return true;
        }
    }
    error.innerHTML = "Sorry: Contact ways must be chosen.";
    return false;
};

// Validate showMsg to ensure radio button is checked
const checkShowMsg = element => {
    for (let i = 0; i < element.length; i++) {
        if (element[i].checked) {
            return true;
        }
    }
    error.innerHTML = "Sorry: Show message or not must be chosen.";
    return false;
};

// Validate text area to ensure the length is no more than 200 words
const checkMessage = element => {
    let value = element.value;
    value = value.replace(/(^\s*)|(\s*$)/gi,"");
    value = value.replace(/[ ]{2,}/gi," ");
    value = value.replace(/\n /,"\n");
    if (value.split(" ").length > 200) {
        error.innerHTML = "Sorry: The length of message must be within 200.";
        return false;
    } else {
        return true;
    }
};

export { validateForm };