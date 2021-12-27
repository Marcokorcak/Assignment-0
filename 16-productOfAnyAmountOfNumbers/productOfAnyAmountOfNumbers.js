function productOfAnyAmountOfNumbers(...args) {
  let productOfNums = 1; //create a variable called productOfNums that is initalized to 1
  for(let i =0; i < args.length; i ++){
  productOfNums = productOfNums * args[i];  //goes through the length of the arguments, and multiply each one by each other
  }
return productOfNums;  //return the final product after all multiplication
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
