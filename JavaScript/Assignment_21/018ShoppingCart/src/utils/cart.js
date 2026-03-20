// Private state
let items = [];

export const cart = {
    // Add product to cart
    addItem(product, quantity = 1) {
        const index = items.findIndex(item => item.id === product.id);
        if (index !== -1) {
            items[index].quantity += quantity;
        } else {
            items.push({ ...product, quantity });
        }
        console.log(`[Success] Added ${product.name} to cart.`);
    },

    // Remove product by ID
    removeItem(id) {
        items = items.filter(item => item.id !== id);
        console.log(`[Update] Item ID ${id} removed.`);
    },

    // Calculate total price
    calculateTotal() {
        return items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    },

    // View all items (returns a copy)
    displayCart() {
        return [...items];
    }
};