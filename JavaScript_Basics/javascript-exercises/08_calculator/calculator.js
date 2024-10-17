const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  let result = 0;
	for (const num of nums) {
    result += num;
  }
  return result;
};

const multiply = function(numArray) {
  let result = 1;
  for (const num of numArray) {
    result *= num;
  }
  return result;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  if (a == 0 || a == 1) return 1; 
  return factorial(a-1) * a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
