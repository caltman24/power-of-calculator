const outputElement = document.querySelector(".output");
const baseElement = document.querySelector("input[name='base']");
const exponetElement = document.querySelector("input[name='exponet']");
const calculateElement = document.querySelector(".input-buttons > button");

const power = (base, exponent) => {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
};

calculateElement.addEventListener("click", () => {
  const baseValue = baseElement.value;
  const exponetValue = exponetElement.value;
  if (exponetValue === "" || baseValue === "") {
    outputElement.innerText = 1;
    return;
  } else if (isNaN(exponetValue) || isNaN(baseValue)) {
    alert("Inputs expect a number");
    return;
  }

  let calculation = parseFloat(power(baseValue, exponetValue));
  if (calculation > 999999999) {
    console.log(true);
    outputElement.innerText = calculation.toExponential(5);
  } else {
    outputElement.innerText = calculation.toLocaleString("en");
  }
});
