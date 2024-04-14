// define the function to show magicians name
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// define an array of magicians name
var magician_names = ["Harry Poter", "Farhan", "Anas"];
//   making a copy of orignal array through .slice() function
var copy_magician_names = magician_names.slice();
// modify the copy array to inclued the great with thier name
var copy_great_magicians = make_great(copy_magician_names);
// show both arrays original and copied
console.log("\nOriginal Array\n");
// original
show_magicians(magician_names);
console.log("\nCopy Array\n");
// copy
show_magicians(copy_great_magicians);
