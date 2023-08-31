document.addEventListener("DOMContentLoaded", () => {
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.addEventListener("click", calculateBMI);
  });
  
  function calculateBMI() {
    const weight = parseFloat(document.getElementById("weightInput").value);
    const height = parseFloat(document.getElementById("heightInput").value) / 100; // Convert cm to meters
    
    const bmi = weight / (height * height);
    const resultElement = document.getElementById("result");
    
    resultElement.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
  }
  