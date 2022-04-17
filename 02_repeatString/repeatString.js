const repeatString = function (string, number) {
  if (number < 0) {
    return "ERROR";
  } else {
    return string.repeat(number);
  }
};

repeatString("hey", 3);
repeatString("hey", 10);
repeatString("hey", 1);
repeatString("hey", 0);
repeatString("hey", -1);
repeatString("hey");
repeatString("", 10);

// Do not edit below this line
module.exports = repeatString;
