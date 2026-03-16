const user = {
    profile: {
        address: {
            city: "Karad"
        }
    }
};

console.log(user.profile?.address?.city);
console.log(user.profile?.contact?.phone);



//Optional chaining ?. prevents error when property does not exist