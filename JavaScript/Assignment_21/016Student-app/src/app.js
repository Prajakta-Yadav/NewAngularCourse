import { Student } from './models/Student.js';
import { findStudentById, calculateAverageGrade } from './utils/helpers.js';

// Initialize Student Registry
const studentRegistry = [
    new Student(101, 'Alice Johnson', 92),
    new Student(102, 'Bob Smith', 78),
    new Student(103, 'Charlie Davis', 85)
];

console.log('--- Student List ---');
studentRegistry.forEach(s => console.log(s.getDetails()));

console.log('\n--- Analytics ---');
console.log(`Class Average: ${calculateAverageGrade(studentRegistry)}%`);

const searchId = 102;
const found = findStudentById(studentRegistry, searchId);
console.log(`Searching for ID ${searchId}:`, found ? found.name : 'Not Found');