
// Step 1 creating complex data multidimensional array of student records
const studentGrades = [
  ["Bob Marley", [85, 90, 78], "pass"],
  ["Burnice White", [92, 88, 95], "pass"],
  ["John Impact", [70, 75, 80], "pass"],
  ["Jane Wayne", [60, 65, 70], "pass"]
];

// Step 2 pushing new entry to the array
studentGrades.push(["Eve Strohl", [88, 92, 94], "pass"]);

// Step 3 using forEach for data checking
studentGrades.forEach((student) => {
  const currentArray = student[1];
  const totalGrades = currentArray.reduce((totalGrades, currentGrades) => {
    return totalGrades + currentGrades;
  }, 0);

  const averageGrades = totalGrades / currentArray.length; 
  
  /* old implementation
  if (averageGrades <= 70) {
      student[2] = 'fail';
  } 
  */
  student[2] = gradingScale(averageGrades); // <---------

  console.log(`${student[0]} ${averageGrades.toFixed(2)}`);

});
  
// Step 4 use of map() to modify the existing array and return an entirely new array
const newStudentGrades = studentGrades.map((student) => {
  const currentArray = student[1];
  const totalGrades = currentArray.reduce((totalGrades, currentGrades) => {
    return totalGrades + currentGrades;
  }, 0);

  const averageGrades = totalGrades / currentArray.length;
  const status = gradingScale(averageGrades); // <---------
  // const status = averageGrades <= 70 ? 'fail' : 'pass';

  return [student[0], currentArray, status];
});

// Step 5 calculate class average
const gradesTotal = studentGrades.reduce((gradesTotal, student) => {
  const studentGrades = student[1];
  const studentsTotal = studentGrades.reduce((gradesTotal, student) => {
    return gradesTotal + student; // Count all the total rades
  }, 0);
  return studentsTotal + gradesTotal;
}, 0);

const classTotal = studentGrades.reduce((count, student) => {
  return count + student[1].length; // Count all the number of grades
}, 0);

console.log(`\nClass Average: ${(gradesTotal/classTotal).toFixed(2)}`);

// Additional Challenge (I implemented the grading scale inside a function)
function gradingScale(average) {
  const status = average < 70 ? 'fail': average <= 85 ? 'pass':'honor pass';
  return status;
}

console.log(`Array from forEach():\n`);
console.log(studentGrades);

console.log(`Array from map():\n`);
console.log(newStudentGrades);