// Private state: Not accessible directly from outside this file
let currentUser = null;

// Mock database of users
const users = [
    { username: 'admin', password: 'password123' },
    { username: 'Prajakta', password: 'secret789' }
];

export const auth = {
    login(username, password) {
        const user = users.find(u => u.username === username && u.password === password);
        
        if (user) {
            currentUser = { username: user.username, loginTime: new Date() };
            console.log(`[Auth] Login successful! Welcome, ${username}.`);
            return true;
        } else {
            console.error(`[Auth] Login failed! Invalid credentials for: ${username}`);
            return false;
        }
    },

    logout() {
        if (currentUser) {
            console.log(`[Auth] User ${currentUser.username} logged out.`);
            currentUser = null;
        } else {
            console.warn("[Auth] No user is currently logged in.");
        }
    },

    isAuthenticated() {
        return currentUser !== null;
    },

    getCurrentUser() {
        return currentUser ? { ...currentUser } : null;
    }
};