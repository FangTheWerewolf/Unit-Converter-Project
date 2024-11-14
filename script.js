const inputValue = 10;
const milesToKm = false;
let result = 0;
if (milesToKm) {
  result = inputValue * 1.60934;
} else {
  result = inputValue / 1.60934;
}
console.log(milesToKm);

const resultString = inputValue + "miles are " + result + " km";
console.log(resultString);

const resultElement = document.getElementById("resultElement");
resultElement.innerHTML = resultString;