
//✅ Coding Style Guidelines

## 1. Indentation Rules

* Use **2 or 4 spaces** (be consistent across project)
* Do NOT mix tabs and spaces
* Keep proper indentation for readability

### ✔ Good

```javascript
function greet() {
  console.log("Hello");
}
```

### ❌ Bad

```javascript
function greet(){
console.log("Hello");
}
```

---

## 2. Naming Conventions

### 🔹 Variables & Functions

* Use **camelCase**

```javascript
let userName;
function getUserData() {}
```

---

### 🔹 Constants

* Use **UPPER_CASE**

```javascript
const API_URL = "https://api.example.com";
```

---

### 🔹 Classes

* Use **PascalCase**

```javascript
class UserService {}
```

---

### 🔹 Files

* Use **kebab-case**

```text
user-service.js
api-handler.js
```

---

## 3. Function Rules

* Keep functions **small and focused**
* One function = one responsibility

### ✔ Good

```javascript
function calculateTotal(price, tax) {
  return price + price * tax;
}
```

---

## 4. Code Formatting

* Add space around operators

```javascript
let total = price + tax;
```

* Use semicolons (recommended)

```javascript
let x = 10;
```

---

## 5. File Structure

Organize project clearly:

```text
project/
│── index.html
│── css/
│   └── styles.css
│── js/
│   ├── app.js
│   ├── api.js
│   ├── ui.js
│   └── utils.js
```

---

## 6. Comments

* Use comments to explain **why**, not obvious code

```javascript
// Calculate total price including tax
function calculateTotal(price, tax) {
  return price + price * tax;
}
```

---

// 7. Error Handling

//Use meaningful error messages

throw new Error("Validation Error: Email is required");


//8. Avoid Global Variables

//Use modules or functions

// ❌ Bad
let count = 0;

// ✅ Good
function createCounter() {
  let count = 0;
  return count;
}