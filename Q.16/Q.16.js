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
