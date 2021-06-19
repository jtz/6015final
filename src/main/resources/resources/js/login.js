// Get the modal
const modal = document.getElementById('modal-login');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Set the message
let message = document.getElementById('msg');

function validateForm() {

    const username = document.getElementById('username');
    const password = document.getElementById('password');

    return checkLength(username) && checkOnlyLetters(username) && checkLength(password) &&
        checkOnlyWords(password);
}

// Validate the input to ensure a min length of 3 and a max length of 15 characters
const checkLength = element => {
    if (element.value.length < 3 || element.value.length > 15) {
        message.innerHTML = `Sorry: The length of ${element.name} must be between 3 and 15 characters.`;
        element.focus();
        return false;
    } else {
        return true;
    }
};

// Validate the username to ensure only alpha characters (A-Z and a-z) are used
const checkOnlyLetters = element => {
    const letters = /^[A-Za-z]+$/;
    if (!element.value.match(letters)) {
        message.innerHTML = "Sorry: Username must contain alpha characters only.";
        return false;
    } else {
        return true;
    }
};

// Validate the password to ensure only word character (alphanumeric & underscore) are used
const checkOnlyWords = element => {
    const words = /^\w+$/;
    if (!element.value.match(words)){
        message.innerHTML = "Sorry: Password must contain alphanumeric and underscore only.";
        return false;
    } else {
        return true;
    }
};

// // Allow specific username
// const allowUsername = element => {
//     if (element.value.toUpperCase() === 'GUEST') {
//         return true;
//     } else {
//         message.innerHTML = "Sorry: This username is not allowed.";
//         return false;
//     }
// };
//
// // Allow specific password
// const allowPassword = element => {
//     if (element.value === '123456') {
//         return true;
//     } else {
//         message.innerHTML = "Sorry: This password is not allowed.";
//         return false;
//     }
// };

// Show allowed username and password when click forget
const showAnswer = () => {
    message.innerHTML = "Username: guest || Password: 123456";
}
