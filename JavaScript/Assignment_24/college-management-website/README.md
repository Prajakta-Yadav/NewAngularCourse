# College Management Website UI

A responsive multi-page college website built with Bootstrap 5 and vanilla JavaScript.

## Pages
- Homepage
- Courses page
- Admission form
- Faculty page
- Contact page

## Features
- Responsive layout using Bootstrap grid system
- Dynamic notice board on homepage
- Image gallery with Bootstrap modal preview
- Theme toggle with local storage persistence
- Admission form validation
- Admission form data stored in local storage

## Technologies Used
- HTML5
- CSS3
- Bootstrap 5
- Vanilla JavaScript

## Local Setup
1. Download or extract the project.
2. Open `index.html` in a browser.
3. For best results, use VS Code Live Server or deploy to a static host.

## Deployment

### Netlify
1. Log in to Netlify.
2. Drag and drop the project folder or zip file into the Netlify deploy area.
3. Set the publish directory to the project root if prompted.

### GitHub Pages
1. Create a new GitHub repository.
2. Upload all project files.
3. Go to **Settings → Pages**.
4. Choose the branch (usually `main`) and root folder.
5. Save to publish the site.

## Notes
- Admission data is stored in browser local storage under the key `college-admissions`.
- Theme preference is stored under the key `college-theme`.
