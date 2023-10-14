function calculate() {
  const x = parseFloat(document.forms["myForm"]["fweight"].value);
  const y = parseFloat(document.forms["myForm"]["fheight"].value);
  const bmi = x / y;
  document.getElementById("p1").innerHTML = `${bmi.toFixed(2)} BMI`;
}

function reset() {
  document.forms["myForm"]["fweight"].value = "";
  document.forms["myForm"]["fheight"].value = "";
}
