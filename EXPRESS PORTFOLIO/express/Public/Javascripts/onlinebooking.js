// File: Onlinebooking.js
// Student’s Name: ANIEBONAM VIVIAN OLUOMACHUKWU
// StudentID: 301308143
// Date: 01-10-2023


// Function to calculate and display the total price
function calculateTotalPrice() {
    let course1 = document.getElementById("course1").checked;
    let course2 = document.getElementById("course2").checked;
    let course3 = document.getElementById("course3").checked;

    // For choices
    let choice1 = document.getElementById("choice1").checked;
    let choice2 = document.getElementById("choice2").checked;
    let choice3 = document.getElementById("choice3").checked;

    // For retrieving the number of hours
    let hours = parseInt(document.getElementById("hoursInput").value);
    // For retrieving the number of days
    let days = parseInt(document.getElementById("daysInput").value);

    // Declaring the variable
    let finalDayAndHour = 0;
    let priceMessage = "";

    if (choice1) {
        finalDayAndHour = 20;
        priceMessage = "The in-person class will cost you: $" + finalDayAndHour + " per hour.\n\n\n Press OK to continue!...";
    }
    if (choice2) {
        finalDayAndHour = 15;
        priceMessage += "The online class will cost you: $" + finalDayAndHour + " per hour.\n\n\n Press OK to continue!...";
    }
    if (choice3) {
        finalDayAndHour = 10;
        priceMessage += "The Asynchronous class will cost you: $" + finalDayAndHour + " per hour.\n\n\n Press OK to continue!...";
    }

    let totalHours = finalDayAndHour * hours * days;

    if (course1 && course2 && course3) {
        totalHours *= 3;
    } else if (course1 && course2) {
        totalHours *= 2;
    } else if (course1 || course2 || course3) {
        totalHours *= 1;
    }

    // Display prices in a pop-up message
    alert(priceMessage);

    // Calculate the total price
    let totalPrice = totalHours;

    // Display the total price
    document.getElementById("result").innerText = "Total Price: $" + totalPrice.toFixed(2);
}

// Add event listener to the submit button
document.getElementById("submitBtn").addEventListener("click", calculateTotalPrice);

// Add event listeners to the choice radio buttons
document.getElementById("choice1").addEventListener("change", calculateTotalPrice);
document.getElementById("choice2").addEventListener("change", calculateTotalPrice);
document.getElementById("choice3").addEventListener("change", calculateTotalPrice);