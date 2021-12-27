function countOfAllIndexMatchingNumbers(nums) {
  let count = 0; //count variable
	for (let i = 0; i<nums.length; i++) //for loop to go through the array
	{	
	if (nums[i] == i) //checks to see if the number is equal to the index it is at
	count++; //increments counts
	}
return count; //return the count
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
