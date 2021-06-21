
const getMsgFromServer = () => {

    const httpURL = "https://jingtian.azurewebsites.net/message/get";

    // Create a XMLHttpRequest object
    const XMR = new XMLHttpRequest();
    if (!XMR) {
        alert("Error: Cannot create an XML HTTP instance.");
        return false;
    }

    // Create the request
    XMR.open('GET', httpURL, true);
    XMR.onreadystatechange = () => {
        if (XMR.readyState === XMLHttpRequest.DONE) {
            if (XMR.status === 200) {
                const response = JSON.parse(XMR.responseText);
                displayInTable(response);
            } else {
                alert("Error: There was a problem with the request.");
            }
        }
    };

    // iv. Send the request to the server
    XMR.send();

    // Display the response data in a HTML table
    const displayInTable = (response) => {
        let str = "";
        for (let i = 0; i < response.length; i++) {
            str += "<p>" + response[i].name + ": <br>" + response[i].msg + "</p>";
        }
        document.getElementById("showNameAndMsg").innerHTML = str;
    };

};

export { getMsgFromServer };


