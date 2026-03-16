let username = null;
let finalName = username ?? "Guest";
console.log(finalName);

//?? returns right-side value only when left-side is:
// null
// undefined