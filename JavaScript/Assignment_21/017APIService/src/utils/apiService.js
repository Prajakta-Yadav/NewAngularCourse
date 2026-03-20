const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const apiService = {
    // GET: Fetch all users (simulating students)
    async getStudents() {
        try {
            const response = await fetch(`${BASE_URL}/users`);
            if (!response.ok) throw new Error('Network response was not ok');
            return await response.json();
        } catch (error) {
            console.error('Fetch error:', error);
            return [];
        }
    },

    // POST: Simulate adding a new student
    async addStudent(studentData) {
        try {
            const response = await fetch(`${BASE_URL}/posts`, {
                method: 'POST',
                body: JSON.stringify(studentData),
                headers: { 'Content-type': 'application/json; charset=UTF-8' },
            });
            return await response.json();
        } catch (error) {
            console.error('Post error:', error);
        }
    }
};