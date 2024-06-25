function bmiCalculator(w, h) {
  return w / h ** 2;
}

function checkBmi() {
  let userWeight = document.getElementById("weight");
  let userHeight = document.getElementById("height");
  let displayUserBmi = document.getElementById("result");

  if (!userWeight.value && !userHeight.value) {
    alert("Kindly fill in the inputs");
  }

  let userBmi = bmiCalculator(userWeight.value, userHeight.value);
  switch (true) {
    case userBmi < 18.5:
      displayUserBmi.innerHTML =
        '<span><span class="bold">Bmi Result:</span> You are <span class="blue">Underweight</span></span>';
      break;
    case userBmi >= 18.5 && userBmi <= 24.9:
      displayUserBmi.innerHTML =
        '<span><span class="bold">Bmi Result:</span> You have a <span class="green">Normal weight</span></span>';
      break;
    case userBmi >= 25 && userBmi <= 29.9:
      displayUserBmi.innerHTML =
        '<span><span class="bold">Bmi Result:</span> You are <span class="amber">Overweight</span></span>';
      break;
    case userBmi > 30:
      displayUserBmi.innerHTML =
        '<span><span class="bold">Bmi Result:</span> You are <span class="red">OBESE</span></span>';
      break;
    default:
      break;
  }
  userHeight.value = "";
  userWeight.value = "";
}
