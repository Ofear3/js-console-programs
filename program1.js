console.log("Program1: Student Grade Calculator")

document.getElementById("submit").onclick = function() {
let sub1 = Number(document.getElementById("sub1").value);
console.log("Subject 1 Mark",sub1);

let sub2 = Number(document.getElementById("sub2").value);
console.log("Subject 2 Mark",sub2);

let sub3 = Number(document.getElementById("sub3").value);
console.log("Subject 3 Mark",sub3);

let sub4 = Number(document.getElementById("sub4").value);
console.log("Subject 4 Mark",sub4);

let sub5 = Number(document.getElementById("sub5").value);
console.log("Subject 5 Mark",sub5);


let totalMarks = sub1+sub2+sub3+sub4+sub5;
console.log("Total Marks: ", totalMarks);

let avgmarks = totalMarks/5;
console.log("Average Marks: ", avgmarks);

let percentage = (totalMarks/500)*100;
console.log("Percentages of marks: ", percentage,"%");

function gradecal(marks) {
    let grade;
    if(marks>100||marks<0) window.alert("Your entered number is not correct");
    if (marks >= 90 && marks <= 100) grade = "A";
    else if (marks >= 80 && marks <= 89) grade = "B";
    else if (marks >= 70 && marks <= 79) grade = "C";
    else if (marks >= 60 && marks <= 69) grade = "D";
    else grade = "F";

  return grade;
}

console.log("Your obtained marks and grade are as follows:")
console.log("Subject 1 grade :" ,gradecal(sub1));
console.log("Subject 2 grade :" ,gradecal(sub2));
console.log("Subject 3 grade :" ,gradecal(sub3));
console.log("Subject 4 grade :" ,gradecal(sub4));
console.log("Subject 5 grade :" ,gradecal(sub5));


}
