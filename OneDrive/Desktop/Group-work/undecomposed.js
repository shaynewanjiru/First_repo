// This function is used to process student data and make a report
 function processStudentsData(students) {
  //the following are the variables
  let totalScore = 0; 
  let passedStudents = [];
  let failedStudents = [];
  let report = "";

 // the loop is used to enter student data 
 
  for (let i = 0; i < students.length; i++) {   
    let student = students[i]; 

    let name = student.name;
    let marks = student.marks;

    totalScore += marks;  // the 

    if (marks >= 50) {
      passedStudents.push(name);
    } else {
      failedStudents.push(name);
    }

    report += name + " scored " + marks + "\n";
  }

  let average = totalScore / students.length;

  report += "\nAverage Score: " + average + "\n";
  report += "Passed: " + passedStudents.join(", ") + "\n";
  report += "Failed: " + failedStudents.join(", ") + "\n";

  console.log(report);

  return {
    average: average,
    passed: passedStudents,
    failed: failedStudents,
    report: report
  };
}

const students = [
  { name: "Alice", marks: 80 },
  { name: "Bob", marks: 45 },
  { name: "Charlie", marks: 60 }
];

processStudentsData(students);


// instructions 
// 🧪 Activity Instructions

// Objective

// Refactor a large function into smaller, reusable, and testable functions while improving code readability and structure.


// Step A: Code Understanding (Commenting Task)

// Add meaningful comments to the existing code.

// Explain what each section of the function is doing.

// Identify:
// Where data is being processed
// Where decisions are being made
// Where output is being generated

// Step B: Identify Responsibilities

// Break down the function into logical responsibilities.
// Write down at least 4 separate tasks the func