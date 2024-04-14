// Create a array
var invitation = ["Saad", "Maaz", "Daniyal", "Umer"];
// Remove value and add new ane on this lication
var dontCome = invitation[0];
// Print a message
console.log(dontCome, "Nai Ahh sakhta");
// Add new value
invitation.splice(0, 1, "Faraz");
// Print new message
console.log("Good News ! We have Found a Bigger Table for a Dinner");
// Add value for starting
invitation.unshift("Sufyan");
// Add value for ending
invitation.push("Umer");
// Get a middle index of our array
var addNewvalue = Math.floor(invitation.length / 2);
// Add value for middle
invitation.splice(addNewvalue, 0, "Arsalan");
//Print message of Updated list
console.log("Updated List of our Guest");
// print our array
invitation.forEach(function (invite) { return console.log("Salam ".concat(invite, ", would you like to dinner with me")); });
// Inform that only to guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");
// Using while-loop to remove guests from the array until only two names remain
while (invitation.length > 2) {
    var remove = invitation.pop();
    console.log("Sorry ".concat(remove, ", I cant invite you to dinner"));
}
// Sending a invitations to the guest on the list
console.log("Invitations to the last 2 Guests");
invitation.forEach(function (lastTow) { return console.log("Luckly ".concat(lastTow, ", you are still invited to dinner")); });
// Remove last to Guest from the list
invitation.pop();
invitation.pop();
console.log("Empty list", invitation);
