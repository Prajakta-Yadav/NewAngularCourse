let count = 0;
let name = "";

console.log(count || 100); // 100
console.log(count ?? 100); // 0

console.log(name || "Guest"); // Guest
console.log(name ?? "Guest"); // ""


/**
 *|| checks all falsy values
  ?? checks only null and undefined

  Falsy values:
● 0
● ""
● false
● null
● undefined
● NaN
 */