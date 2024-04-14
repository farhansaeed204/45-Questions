// Creating a array
let userNames: string[] = ["Maaz", "Saad", "Anas", "Admin", "Daniyal"];

// Using ForEach loop on array
userNames.forEach(userName => {
    if(userName === "Admin") {
        console.log(`Hello ${userName}, would you like to see a status report?`);
    }else{
        console.log(`Hello ${userName}, thank you for logging in again.`);
    }
})