// Create a array
let invitation = ["Saad", "Maaz", "Daniyal", "Umer"];

// Remove value and add new ane on this lication
let dontCome = invitation[0];

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
let addNewvalue: number = Math.floor(invitation.length / 2); 

// Add value for middle
invitation.splice(addNewvalue, 0, "Arsalan");

//Print message of Updated list
console.log("Updated List of our Guest")

// print our array
invitation.forEach(invite => console.log(`Salam ${invite}, would you like to dinner with me`));