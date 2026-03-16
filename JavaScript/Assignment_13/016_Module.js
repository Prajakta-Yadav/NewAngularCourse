function userModule() {
    let username = "Prajakta";
    function getUsername() {
        return username;
    }

    function setUsername(newName) {
        username = newName;
    }
    
    return {

        getUsername,
        setUsername
    };
}

let user = userModule();
console.log(user.getUsername());

user.setUsername("Teju");
console.log(user.getUsername());

//Only selected methods are exposed.
//Internal data stays private.