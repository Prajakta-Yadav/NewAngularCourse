# ShopSphere - Interactive E-Commerce Website

A responsive multi-page e-commerce UI built with HTML, CSS, Bootstrap, and JavaScript.

## Features

- Home page, product listing page, product detail page, cart page, login/register page, and contact page
- Responsive navbar with dropdown
- Dynamic product rendering from a public API with fallback data
- Search filter and sorting by price/name/rating
- Add to cart functionality with cart total calculation
- Cart persistence using localStorage
- Login and contact form validation
- Dark/light mode toggle persisted in localStorage
- Login modal popup on homepage
- Toast notifications for add-to-cart actions
- Loading spinner while fetching products
- Smooth scrolling navigation
- Back-to-top button

## Tech Stack

- HTML5
- CSS3
- Bootstrap 5
- Vanilla JavaScript

## Project Structure

- `index.html` - homepage
- `products.html` - product listing
- `product-detail.html` - product details
- `cart.html` - cart page
- `login.html` - login and registration
- `contact.html` - contact page
- `css/style.css` - shared styling
- `js/*.js` - application scripts

## Running Locally

Open `index.html` directly, or use a simple local server such as VS Code Live Server for best API behavior.

## Deployment on GitHub Pages

1. Create a new GitHub repository.
2. Upload all files from this project.
3. Commit and push to the `main` branch.
4. Open repository **Settings > Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and root folder.
7. Save and wait for GitHub Pages to publish.
8. Your live site URL will appear in the Pages section.

## Notes

- Product data is fetched from `https://fakestoreapi.com/products`.
- If the API is unavailable, cached or fallback products are used.


## Recent update
- Added a Buy Items button on the cart page
- Added a payment page with UPI, card, and cash on delivery options
- Shows a payment successful message and clears the cart after checkout
