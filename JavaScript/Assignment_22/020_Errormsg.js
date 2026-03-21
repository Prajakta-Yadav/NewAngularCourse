function divide(a, b) {
  if (b === 0) {
    throw new Error(`Division error: cannot divide ${a} by zero`);
  }
  return a / b;
}

console.log(divide(10, 5));
console.log(divide(20, 0)); 

/**
 * throw new Error("Failed to fetch users from API");
 * 
    throw new Error("Email validation failed: invalid email format");

    throw new Error("Division error: cannot divide by zero");

    throw new Error(`API Error: Failed to fetch users (Status: ${response.status})`);

    throw new Error("Validation error: email field is empty or invalid");
*/