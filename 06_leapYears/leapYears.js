//Leap years are years divisible by four (like 1984 and 2004).
// However, years divisible by 100 are not leap years (such as 1800 and 1900)
//unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).

const leapYears = (year) => {
  if (isDivisableByFour(year)) {
    if (isDivisableByOneHundred(year)) {
      if (isDivisableByOneHundred(year)) {
        if (isDivisableByFourHundred(year)) {
          return true;
        } else return false;
      }
    } else return true;
  } else return false;
};

const isDivisableByFour = (year) => {
  if (year % 4 === 0) {
    return true;
  } else return false;
};

const isDivisableByOneHundred = (year) => {
  if (year % 100 === 0) {
    return true;
  } else return false;
};

const isDivisableByFourHundred = (year) => {
  if (year % 400 === 0) {
    return true;
  } else return false;
};

//console.log(leapYears(1996));

// Do not edit below this line
module.exports = leapYears;
