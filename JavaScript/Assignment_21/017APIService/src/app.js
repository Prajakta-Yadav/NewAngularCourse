import { Student } from './models/Student.js';
import { apiService } from './utils/apiService.js';
import { calculateAverageGrade } from './utils/helpers.js';

async function initApp() {
    console.log('--- Loading Student Data from API ---');

    // 1. Fetch data from the API
    const rawData = await apiService.getStudents();

    // 2. Map API data to our Student Class
    // (Note: Since the API doesn't have grades, we'll assign random ones)
    const students = rawData.slice(0, 5).map(user => {
        const randomGrade = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
        return new Student(user.id, user.name, randomGrade);
    });

    // 3. Display Results
    students.forEach(s => console.log(s.getDetails()));

    console.log('\n--- Analytics ---');
    console.log(`Class Average: ${calculateAverageGrade(students)}%`);
    
    // 4. Simulate adding a student
    const newEntry = await apiService.addStudent({ name: 'Prajakta', grade: 95 });
    console.log('\n--- API Success ---');
    console.log('Successfully posted new student:', newEntry.name);
}

initApp();