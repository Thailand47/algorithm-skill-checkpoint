// Test case
const students = [
  { id: 302, name: "Emily Carter" },
  { id: 105, name: "Michael Johnson" },
  { id: 501, name: "Sarah Wilson" },
  { id: 207, name: "Daniel Brown" },
  { id: 403, name: "Sophia Martinez" },
];

function findStudentById(students, id) {
  for (let student of students) {
    // console.log(`-----${student.name}`);
    if (student.id === id) {
      return students;
    }

  }
  return null;
}

console.log(findStudentById(students, 302)); // Output: { id: 302, name: "Emily Carter" }
// console.log(findStudentById(students, 4)); // Output: null
