
let totalScore = 0; 
    let passedStudents = [];
    let failedStudents = [];
    let report = "";

const students = [
  { name: "Alice", marks: 80 },
  { name: "Bob", marks: 45 },
  { name: "Charlie", marks: 60 }
];

 
 function DisplayStudents(students) {
   
   console.log(students)
  
 }
DisplayStudents(students)

function InputStudentData(students){
    for (let i = 0; i < students.length; i++) {   
    let student = students[i];

    let name = student.name;
     let marks = student.marks;
    CalcTotalScore ( marks)
    GroupStudents (name ,marks)

}
}
InputStudentData(students)


 function CalcTotalScore ( marks){
    totalScore += marks
     console.log(totalScore)
 }
 
 function GroupStudents (name ,marks){
     if (marks >= 50) {
      passedStudents.push(student.name);
    } else {
      failedStudents.push(student.name);
    }
 }

