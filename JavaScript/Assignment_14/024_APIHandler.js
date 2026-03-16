const apiResponse = {
    data: {
        user: {
        profile: {
            email: "omkar@gmail.com"
        }

        }
    }

};

console.log(apiResponse.data?.user?.profile?.email);
console.log(apiResponse.data?.user?.profile?.phone ?? "Phone not available");

//Useful when API data is incomplete or property is missing.