const numericGrade = document.getElementById('numericGrade');
const gradeDisplay = document.getElementById('gradeDisplay'); 

function convert() {
    const grade = parseInt(numericGrade.value); 
    
    let myGrade = "";
    if (grade >= 80 && grade <= 100) {
        myGrade = "A"; 
    } 
    else if (grade >= 60 && grade <= 79) {
        myGrade = "B"; 
    } 
    else if (grade >= 50 && grade <= 59) {
         myGrade = "C"; 
    } 
    else if (grade >= 40 && grade <= 49) {
        myGrade = "D"; 
    }
    else if (grade < 40) { 
        myGrade = "E"; 
    }
    console.log(myGrade); 
    gradeDisplay.innerText = `Your letter grade is ${myGrade}`; 
}
