const reverseString = (text) => {
  // https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
  let reversedString = text.split("").reverse().join("");

  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
