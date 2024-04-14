let currentUsers = ["Farhan", "Usman", "Maaz", "Saad", "Daniyal"];

let newUsers = ["Faraz", "Maaz", "Zainab", "Farhan", "Anas"];

// loop Through newusers to check for username avaibility
newUsers.forEach(new_one_user => {
    let our_condition = currentUsers.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }
    else{
        console.log(`This Username ${new_one_user} is available`)
    }
})