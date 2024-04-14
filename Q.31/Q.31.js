var userNames = ["Saad", "Maaz", "Anas", "Admin", "Daniyal"];
userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    userNames.forEach(function (userName) {
        if (userName === "Admin") {
            console.log("Hello ".concat(userName, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(userName, ", thank you for logging in again."));
        }
    });
}
