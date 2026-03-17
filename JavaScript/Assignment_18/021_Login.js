function login(username, password) {
return new Promise((resolve, reject) => {
if (username === "admin" && password === "1234") {
resolve("Login successful");
} else {
reject("Invalid credentials");
}
});
}
login("admin", "1234")
.then((msg) => console.log(msg))
.catch((err) => console.log(err));