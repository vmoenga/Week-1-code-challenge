function calculate() {
  const speed = parseInt(document.getElementById('speed').value);
  
  // Initialize points variable to store the number of demerit points
  let points = 0;
  
  // Check if the speed is less than 70
  if (speed < 70) {
      document.getElementById('result').textContent = 'Ok';
  } else {
      points = Math.floor((speed - 70) / 5);
      
      // Check if the calculated points exceed 12 (threshold for license suspension)
      if (points > 12) {
          document.getElementById('result').textContent = 'License suspended';
      } else {
          document.getElementById('result').textContent = 'Points: ' + points;
      }
  }
}
