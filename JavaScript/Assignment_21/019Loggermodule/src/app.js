import { logger } from './utils/logger.js';

// Simulation of a function that might fail
function divideNumbers(a, b) {
    logger.info(`Attempting to divide ${a} by ${b}`);

    if (b === 0) {
        logger.error("Division failed", "Cannot divide by zero!");
        return;
    }

    const result = a / b;
    logger.info(`Result is: ${result}`);
}

// 1. Normal Operation
divideNumbers(10, 2);

// 2. Triggering a Warning
logger.warn("Server memory is reaching 80% capacity.");

// 3. Triggering an Error
divideNumbers(10, 0);