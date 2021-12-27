function sumOfMinimumAndMaximum(nums) {
  let minimum = nums[0];  //variable called minimum that is initialized to the first array element
  let maximum = nums[0];  //variavle called maximum that is initialized to the first array element 
  let sum = 0;
  for(let i =0; i < nums.length; i++){
  if(minimum > nums[i]){ //goes through the array and checks if there are any elements smaller than the maximum
  minimum = nums[i];  //if the number is smaller than the maximum, the minimum variable becomes the element at that index
  }
  if(maximum < nums[i]){  //goes through the nums array and checks if there are any values greater than the maximum
  maximum = nums[i]  //if the number is greater than the maximum, maximum becomes that element.
  }
 }
sum = minimum + maximum;  //add the minimum and maximum, and set that to the sum variable
return sum; //return the final sum
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
