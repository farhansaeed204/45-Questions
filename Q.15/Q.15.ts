let invitation = ["Saad", "Maaz", "Daniyal", "Umer"];

let dontCome = invitation[0];

console.log(dontCome, "Nai Ahh sakhta");

invitation.splice(0, 1, "Faraz");

invitation.forEach(guest => console.log(`Hello ${guest}, would you like to dinner with me?`));