
// Step 1
const studentGrades = [
  ["Bob Marley", [85, 90, 78], "pass"],
  ["Burnice White", [92, 88, 95], "pass"],
  ["John Impact", [70, 75, 80], "pass"],
  ["Jane Wayne", [60, 65, 70], "pass"]
];

// Step 2
studentGrades.push(["Eve Strohl", [88, 92, 94], "pass"]);

// Step 3
studentGrades.forEach((student) => {
  const currentArray = student[1];
  const totalGrades = currentArray.reduce((totalGrades, currentGrades) => {
    return totalGrades + currentGrades;
  }, 0);

  const averageGrades = totalGrades / currentArray.length; 
  
  if (averageGrades <= 70) {
    student[2] = 'fail';
  }

  console.log(`${student[0]} ${averageGrades.toFixed(2)}`);

});
  
// Step 4

const newStudentGrades = studentGrades.map((student) => {
  const currentArray = student[1];
  const totalGrades = currentArray.reduce((totalGrades, currentGrades) => {
    return totalGrades + currentGrades;
  }, 0);

  const averageGrades = totalGrades / currentArray.length;

  if (averageGrades <= 70) {
    student[2] = 'fail';
  }

  return student;
});


console.log(studentGrades);

console.log(newStudentGrades)