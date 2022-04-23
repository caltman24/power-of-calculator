const outputElement = document.querySelector(".output");
const baseElement = document.querySelector("input[name='base']");
const exponetElement = document.querySelector("input[name='exponet']");
const calculateElement = document.querySelector(".input-buttons > button");
const historyBase = document.querySelector(".history > span");
const historyExponent = document.querySelector(".history > sup");

const power = (base, exponent) => {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
};

const calculate = (baseValue, exponetValue) => {
  if (exponetValue === "" || baseValue === "") {
    return;
  } else if (isNaN(exponetValue) || isNaN(baseValue)) {
    alert("Inputs expect a number");
    return;
  }

  let calculation = power(baseValue, exponetValue);
  if (calculation > 999999999) {
    console.log(true);
    outputElement.innerText = calculation.toExponential(5);
  } else {
    outputElement.innerText = calculation.toLocaleString("en");
  }
  historyBase.innerText = baseValue;
  historyExponent.innerText = exponetValue;
};

calculateElement.addEventListener("click", () => {
  calculate(baseElement.value, exponetElement.value);
});

document.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.key === 'Enter') {
    calculate(baseElement.value, exponetElement.value);
  }
});
