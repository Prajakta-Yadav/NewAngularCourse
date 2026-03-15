function login(username, password) {
if (username !== "admin" || password !== "1234") {
throw new Error("Invalid username or password");
}
console.log("Login successful");
}
try {
login("user", "1111");
} catch (error) {
console.log(error.message);
}