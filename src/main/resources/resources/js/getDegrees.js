const button = document.getElementById("button");
const table = document.getElementById("table");

// i. Write the event handler
button.onclick = function() { getDegrees()};

const getDegrees = () => {

    // const httpURL = 'http://localhost:8080/getjson';
    const httpURL = 'https://jingtian6015.azurewebsites.net/getjson';

    // ii. Create a XMLHttpRequest object
    const httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        alert("Error: Cannot create an XML HTTP instance.");
        return false;
    }

    // iii. Write code to create the request for the JSON data on the server
    httpRequest.open('GET', httpURL, true);
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                const text = JSON.parse(httpRequest.responseText);
                const toInsert = displayInTable(text);
                button.insertAdjacentElement("beforebegin", toInsert);
                button.style.display = "none";
                table.style.display = "inline-block";
            } else {
                alert("Error: There was a problem with the request.");
            }
        }
    };

    // iv. Send the request to the server
    httpRequest.send();
};

// v. Process the returned JSON data using JavaScript
// vi. Display the JSON data in a HTML table
const displayInTable = (text) => {

    // Get the array
    const degrees = text.my_college_degrees;
    // Get the count of rows
    const rowCount = degrees.length;
    // Get the keys array
    let keys = Object.keys(degrees[0].degree);
    // Get the count of columns
    const columnCount = keys.length;

    // Create the header row
    const headerRow = table.insertRow(-1);
    for (let i = 0; i < columnCount; i++) {
        // Create the header th element
        let headerCell = document.createElement("TH");
        // Write the columnName
        headerCell.innerHTML = keys[i].toUpperCase();
        // Append columnName to the header row
        headerRow.appendChild(headerCell);
    }

    // Create the data rows
    for (let i = 0; i < rowCount; i++) {
        const dataRow = table.insertRow(-1);
        for (let j = 0; j < columnCount; j++) {
            let dataCell = dataRow.insertCell(-1);
            dataCell.innerHTML = degrees[i].degree[keys[j]];
            dataRow.appendChild(dataCell);
        }
    }

    return table;
};
