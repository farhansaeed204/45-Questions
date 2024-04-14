// define a function with a rest parameter that accept items arguments representing our sandwich
function make_sandwich(...items: string[]) {
  console.log("\nMaking sandwich with the following items: \n");

  items.forEach((singleItem) => console.log(singleItem));
  
  console.log("\nNow Enjoy Sandwich");
}

// call the function 3 time different number of aruments
make_sandwich("Chicken", "Cheese", "Mayo", "Egg");

make_sandwich("Bread", "Butter");

make_sandwich(
  "Bread",
  "Butter",
  "Egg",
  "Cheese",
  "Chicken",
  "Lettus",
  "Tomato"
);
