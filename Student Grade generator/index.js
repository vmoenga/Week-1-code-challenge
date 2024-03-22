function calculateGrades() {
    const name = document.getElementById('nameInput').value;
    
    const cssGrade = parseInt(document.getElementById('cssGradeInput').value);
    const cssLetterGrade = calculateLetterGrade(cssGrade);

    const htmlGrade = parseInt(document.getElementById('htmlGradeInput').value);
    const htmlLetterGrade = calculateLetterGrade(htmlGrade);

    const javascriptGrade = parseInt(document.getElementById('javascriptGradeInput').value);
    const javascriptLetterGrade = calculateLetterGrade(javascriptGrade);

    const gradeDisplay = document.getElementById('gradeDisplay');
    gradeDisplay.innerHTML = `
        ${name}, here are your grades:<br>
        CSS: ${cssLetterGrade}<br>
        HTML: ${htmlLetterGrade}<br>
        JavaScript: ${javascriptLetterGrade}<br>
    `;
}

function calculateLetterGrade(grade) {
    if (grade >= 80 && grade <= 100) {
        return "A";
    } else if (grade >= 60 && grade <= 79) {
        return "B";
    } else if (grade >= 50 && grade <= 59) {
        return "C";
    } else if (grade >= 40 && grade <= 49) {
        return "D";
    } else {
        return "E";
    }
}
