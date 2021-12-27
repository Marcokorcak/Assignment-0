function sumOfNumsWithinARange(nums, start, end) {
  let count = 0; 
for (let i = 0; i<nums.length; i++) //for loop to go through the array
	{	
	if (nums[i]<= end && nums[i] >= start) //checks to see if the number is within the range
	count++; //increments count if the number is within the range
	}
return count; //return the count
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
