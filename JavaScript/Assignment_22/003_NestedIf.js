//messy code

/*
function checkUser(user){
    if(user){
        if(user.isLoggedIn){
        return "Welcome"
        }
    }
}

console.log(checkUser("Praju"));

*/

function checkUser(user){
    if(!user) return "No user"
        if(!user.isLoggedIn) return "Please login"
        return "Welcome"
}

console.log(checkUser("Praju"));
