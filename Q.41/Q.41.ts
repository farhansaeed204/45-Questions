// define a function to print each magician name from an array
function show_magician(magician: string[]) {
  magician.forEach((name) => console.log(name));
}

// define an array containing magicians name

let magician_names = ["Harry Poter", "Farhan", "Anas"];

// call the function
show_magician(magician_names);
