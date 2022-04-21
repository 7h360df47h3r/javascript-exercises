const removeFromArray = (array, ...exclude) => {
  let bucket = array;

  exclude.forEach((currentValue) => {
    if (bucket.includes(currentValue)) {
      bucket.splice(bucket.indexOf(currentValue), 1);
      console.log(`${currentValue} removed from array`);
    } else {
      console.log(`${currentValue} does not exist within ${bucket}`);
    }
  });

  return bucket;
};

//removeFromArray([1, 2, 3, 4, 5], 4, 5);

// Do not edit below this line
module.exports = removeFromArray;
