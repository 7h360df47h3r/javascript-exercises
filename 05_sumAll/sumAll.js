const sumAll = function (first = 1, second = 4) {
  //Implement a function that takes 2 integers and ...
  //returns the sum of every number between(and including) them:

  //https://www.w3schools.com/Jsref/jsref_sign.asp
  if (first < 0 || second < 0) {
    return "ERROR";
  } else if (typeof first !== "number" || typeof second !== "number") {
    return "ERROR";
  } else {
    let result =
      ((Math.max(first, second) - Math.min(first, second) + 1) *
        (Math.min(first, second) + Math.max(first, second))) /
      2;

    return result;
  }
};

// Do not edit below this line
module.exports = sumAll;
