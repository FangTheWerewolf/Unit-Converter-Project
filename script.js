const inputValue = 10;
const milesToKm = true;
let result = 0;
if (milesToKm) {
result = inputValue +1.60934;
} else { result = inputValue / 1.60934
}
const resultString = inputValue + " miles are " + result + " km";
console.log(resultString)