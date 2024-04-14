// Creating a array
var userNames = ["Maaz", "Saad", "Anas", "Admin", "Daniyal"];
// Using ForEach loop on array
userNames.forEach(function (userName) {
    if (userName === "Admin") {
        console.log("Hello ".concat(userName, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(userName, ", thank you for logging in again."));
    }
});
