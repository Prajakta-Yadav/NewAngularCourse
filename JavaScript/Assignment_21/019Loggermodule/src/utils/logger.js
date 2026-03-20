export const logger = {
    // Standard Info Log
    info(message) {
        const time = new Date().toLocaleTimeString();
        console.log(`[${time}] ℹ️ INFO: ${message}`);
    },

    // Warning Log
    warn(message) {
        const time = new Date().toLocaleTimeString();
        console.warn(`[${time}] ⚠️ WARN: ${message}`);
    },

    // Error Log with optional error object details
    error(message, err = null) {
        const time = new Date().toLocaleTimeString();
        console.error(`[${time}] ❌ ERROR: ${message}`);
        if (err) {
            console.error(`   Details: ${err.message || err}`);
        }
    }
};