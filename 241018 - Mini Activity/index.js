
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
for (let i = 0; i < studentGrades.length; i++) {
  const currentArray = studentGrades[i][1];
  const totalGrades = currentArray.reduce((totalGrades, currentGrades) => {
    return totalGrades + currentGrades;
  }, 0);

  const averageGrades = totalGrades / currentArray.length; 
  
  if (averageGrades <= 70) {
    studentGrades[i][2] = 'fail';
  }

  console.log(`${studentGrades[i][0]} ${averageGrades.toFixed(2)}`);
};

console.log(studentGrades);