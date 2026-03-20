import { auth } from './services/auth.js';

function accessDashboard() {
    if (auth.isAuthenticated()) {
        const user = auth.getCurrentUser();
        console.log(`ACCESS GRANTED: Welcome to your Dashboard, ${user.username}!`);
    } else {
        console.log("ACCESS DENIED: Please log in first.");
    }
}

// 1. Try to access dashboard without logging in
console.log("--- Initial Attempt ---");
accessDashboard();

// 2. Try to log in with WRONG credentials
console.log("\n--- Login Attempt (Wrong) ---");
auth.login('admin', 'wrong-pass');

// 3. Log in with CORRECT credentials
console.log("\n--- Login Attempt (Correct) ---");
if (auth.login('Prajakta', 'secret789')) {
    accessDashboard();
}

// 4. Log out
console.log("\n--- Logging Out ---");
auth.logout();
accessDashboard();