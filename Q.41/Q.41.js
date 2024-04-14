// define a function to print each magician name from an array
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// define an array containing magicians name
var magician_names = ["Harry Poter", "Farhan", "Anas"];
// call the function
show_magician(magician_names);
