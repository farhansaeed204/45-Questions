// ceating a array
let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// using for-loop
for (let onenumber of Numbers) {
  let ordinalEnding: string;

  if (onenumber === 1) {
    ordinalEnding = "st";
  } else if (onenumber === 2) {
    ordinalEnding = "nd";
  } else if (onenumber === 3) {
    ordinalEnding = "rd";
  } else {
    ordinalEnding = "th";
  }
  console.log(`${onenumber}${ordinalEnding}`);
}
