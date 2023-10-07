// File: multiplication-table.js
// Student’s Name: ANIEBONAM VIVIAN OLUOMACHUKWU
// StudentID: 301308143
// Date: 01-10-2023


// Function to draw the multiplication table
function makeTable() {
    // Get the user input for rows and columns
    var rows = parseInt(document.getElementById("rows").value);
    var columns = parseInt(document.getElementById("columns").value);

    // Check if the input is valid
    if (isNaN(rows) || isNaN(columns) || rows < 1 || columns < 1) {
        alert("Error!..\n Please enter valid values for rows and columns.");
        return;
    }

    // Clear the existing table
    var tableContainer = document.getElementById("table-container");
    tableContainer.innerHTML = "";

    // Create a new table element
    var table = document.createElement("table");

    
    // Generate the table rows and columns
    for (var i = 0; i < rows; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < columns; j++) {
            var cell = document.createElement("td");

            // Set cell color based on row and column index
            if (i === 0) {
                cell.style.backgroundColor = "blue";
                cell.style.color = "white";
            }
            
            if (j === 0) {
                cell.style.backgroundColor = "red";
                cell.style.color = "white";
            }

            cell.textContent = (i + 1) * (j + 1);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    // Add the table to the table container
    tableContainer.appendChild(table);
}

function resetTable() {
    // Clear the table container
    var tableContainer = document.getElementById("table-container");
    tableContainer.innerHTML = "";
}