function showUserProfile(user) {
    const {
        name = "Unknown",
        age = "Not Provided",
        address
    } = user;

    const city = address?.city ?? "City not available";

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("City:", city);
}

showUserProfile({
    name: "Omkar",
    age: 22,
    address: {
        city: "Karad"
    }
});

showUserProfile({
    name: "Rahul"
});