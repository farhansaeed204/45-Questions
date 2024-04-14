var invitation = ["Saad", "Maaz", "Daniyal", "Umer"];
var dontCome = invitation[0];
console.log(dontCome, "Nai Ahh sakhta");
invitation.splice(0, 1, "Faraz");
invitation.forEach(function (guest) { return console.log("Hello ".concat(guest, ", would you like to dinner with me?")); });
