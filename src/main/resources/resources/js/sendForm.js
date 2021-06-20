
import { validateForm } from "./validateForm.js";


window.addEventListener("load", function () {

    function sendData() {
        const XHR = new XMLHttpRequest();
        const formData = getFormData(form)
        const formJSON = JSON.stringify(formData);

        // Define what happens on successful data submission
        XHR.addEventListener("load", function (event) {
            alert(event.target.responseText);
        });

        // Define what happens in case of error
        XHR.addEventListener("error", function () {
            alert('Oops! Something went wrong.');
        });

        // Set up request
        XHR.open("POST", "http://localhost:8080/message/create");
        XHR.setRequestHeader("Content-Type","application/json");
        // The data sent is what the user provided in the form
        XHR.send(formJSON);
    }

    // Access the form element
    const form = document.getElementById("msgForm");

    // Add event listener to form submit event
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            sendData();
            alert("Message Send Successfully!")
        } else {
            alert("Not Send: Can't pass the form validation. ");
        }

    });

    // Get Form Data
    const getFormData = (form) => {
        const data = new FormData(form);
        return Array.from(data.keys()).reduce((result, key) => {
            result[key] = data.get(key);
            return result;
        }, {});
    };

});
