import { cart } from './utils/cart.js';

// 1. Define available inventory
const inventory = [
    { id: 101, name: 'Wireless Mouse', price: 25.00 },
    { id: 102, name: 'Mechanical Keyboard', price: 75.50 },
    { id: 103, name: 'HDMI Cable', price: 12.99 }
];

console.log('--- Welcome to the Tech Store ---');

// 2. Perform actions
cart.addItem(inventory[0], 1); // Mouse
cart.addItem(inventory[1], 1); // Keyboard
cart.addItem(inventory[0], 1); // Add another mouse (increments quantity)

// 3. Show Cart Status
console.log('\nYour Current Cart:');
const currentItems = cart.displayCart();
currentItems.forEach(item => {
    console.log(`- ${item.name} | Price: $${item.price} | Qty: ${item.quantity}`);
});

// 4. Show Final Bill
const total = cart.calculateTotal();
console.log('---------------------------------');
console.log(`TOTAL AMOUNT DUE: $${total.toFixed(2)}`);