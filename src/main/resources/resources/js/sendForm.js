
import { validateForm } from "./validateForm.js";
import { getMsgFromServer } from "./getForm.js";


window.addEventListener("load", function () {

    // Load all stored messages on web server
    getMsgFromServer();

    // Access the form element
    const form = document.getElementById("msgForm");

    // Add event listener to form submit event
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            sendData();
            alert("Message Send Successfully!")
            location.reload();
            getMsgFromServer();
        } else {
            alert("Message Not Send: Can't pass the form validation. ");
        }
    });

    // Send form data to web server
    function sendData() {

        // Get a JSON format of form data
        const formData = getFormData(form)
        const formJSON = JSON.stringify(formData);

        // Create a XMLHttpRequest object
        const XHR = new XMLHttpRequest();
        if (!XHR) {
            alert("Error: Cannot create an XML HTTP instance.");
            return false;
        }

        // Create and send request
        XHR.open("POST", "https://jingtian.azurewebsites.net/message/create", true);
        XHR.setRequestHeader("Content-Type","application/json");
        XHR.send(formJSON);
    }

    // Get form data
    const getFormData = (form) => {
        const data = new FormData(form);
        return Array.from(data.keys()).reduce((result, key) => {
            result[key] = data.get(key);
            return result;
        }, {});
    };

});
