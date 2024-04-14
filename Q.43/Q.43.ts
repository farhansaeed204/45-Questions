// define the function to show magicians name
function show_magicians(magicians: string[]) {
  magicians.forEach((name) => console.log(name));
}

// function to make magicians great through .map() it will modify array
function make_great(magicians: string[]) {
  return magicians.map((name) => `The Great ${name}`);
}

// define an array of magicians name
let magician_names = ["Harry Poter", "Farhan", "Anas"];

//   making a copy of orignal array through .slice() function
let copy_magician_names = magician_names.slice();

// modify the copy array to inclued the great with thier name

let copy_great_magicians = make_great(copy_magician_names);

// show both arrays original and copied
console.log("\nOriginal Array\n");
// original
show_magicians(magician_names);
console.log("\nCopy Array\n");
// copy
show_magicians(copy_great_magicians);
