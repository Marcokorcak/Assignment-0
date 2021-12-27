function countOfAllNumbersSmallerThanTarget(nums, target) {
  let count = 0; //create a count variable to keep track of numbers smaller than target
  for (let i = 0; i<nums.length; i++) //for loop to go through the array
	{	
	if (nums[i]<target) //checks to see if the number is less than the target
	count++; //increments counts
	}
return count; //return the count
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
