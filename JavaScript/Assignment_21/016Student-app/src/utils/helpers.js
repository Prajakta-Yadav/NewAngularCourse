export const findStudentById = (students, id) => {
    return students.find(s => s.id === id);
};

export const calculateAverageGrade = (students) => {
    if (students.length === 0) return 0;
    const total = students.reduce((sum, s) => sum + s.grade, 0);
    return (total / students.length).toFixed(2);
};