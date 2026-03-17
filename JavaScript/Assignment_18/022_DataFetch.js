async function fetchUser() {
let data = await Promise.resolve({ name: "Prajakta", age: 22 });
console.log(data);
}
fetchUser();