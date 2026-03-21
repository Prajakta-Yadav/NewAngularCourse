import { add, subtract } from './math.js';
import { formatCurrency } from './format.js';
import { showMessage } from './logger.js';

const total = add(10, 5);
const difference = subtract(10, 5);

showMessage(`Total: ${formatCurrency(total)}`);
showMessage(`Difference: ${formatCurrency(difference)}`);