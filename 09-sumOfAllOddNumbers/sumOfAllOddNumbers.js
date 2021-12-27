function sumOfAllOddNumbers(nums) {
  let count = 0; //creating count variable
for (let i = 0; i<nums.length; i++) //for loop to go through the array
	{	
	if (nums[i] % 2 == 1) //checks to see if the number is odd
	count++; //increments counts
	}
return count; //return the count
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
