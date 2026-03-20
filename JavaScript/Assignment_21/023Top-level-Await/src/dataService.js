// No need for 'async function' wrapper!
console.log("1. Starting data fetch in module...");

const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
const data = await response.json();

console.log("2. Data fetch complete.");

// We export the ALREADY fetched data
export const postTitle = data.title;