const ftoc = (temp) => {
  temp = ((temp - 32) * 5) / 9;
  rounded = parseFloat(temp.toFixed(1));

  if (temp == 0) return temp;
  else return rounded;
};

const ctof = (temp) => {
  temp = (temp * 9) / 5 + 32;
  rounded = parseFloat(temp.toFixed(1));

  if (temp == 0) return temp;
  else return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
