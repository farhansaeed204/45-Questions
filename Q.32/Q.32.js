var currentUsers = ["Farhan", "Usman", "Maaz", "Saad", "Daniyal"];
var newUsers = ["Faraz", "Maaz", "Zainab", "Farhan", "Anas"];
// loop Through newusers to check for username avaibility
newUsers.forEach(function (new_one_user) {
    var our_condition = currentUsers.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
