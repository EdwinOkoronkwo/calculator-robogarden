function calculate() {
  let result;
  const x = parseFloat(document.forms["myForm"]["fweight"].value);
  const y = parseFloat(document.forms["myForm"]["fheight"].value);
  const bmi = x / (y ^ 2);
  if (bmi <= 18.5) result = "Under weight";
  else if (bmi <= 24.9) result = "Normal";
  else if (bmi <= 29.9) result = "Overweight";
  else result = "Obese";
  document.getElementById("p1").innerHTML = `${bmi.toFixed(2)} BMI`;
  document.getElementById("p2").innerHTML = result;
}

function reset() {
  document.forms["myForm"]["fweight"].value = "";
  document.forms["myForm"]["fheight"].value = "";
}
