// creating a function
function describe_city (city: string, country: string = "Pakistan"){
    console.log(`${city} is in ${country}`);
}

// calling a function
describe_city("Karachi");
describe_city("Lahor");
describe_city("Mumbai", "India");