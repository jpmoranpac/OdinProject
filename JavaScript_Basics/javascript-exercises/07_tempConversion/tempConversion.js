const roundToDecimalPlaces = function(number, decimalPlaces) {
  return Math.round(number * 10*decimalPlaces)/10*decimalPlaces;
}

const convertToCelsius = function(fahrenheit) {
  return roundToDecimalPlaces((fahrenheit - 32) * 5 / 9, 1);
};

const convertToFahrenheit = function(celcius) {
  return roundToDecimalPlaces(celcius * 9 / 5 + 32, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
