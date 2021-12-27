function pairSum(nums, target) {
  if(nums.length <= 1){  //throws error if the length of the array is less than or equal to one
throw 'error';
}
else
{
    for(let i = 0; i < nums.length; i++)
{
     for(let j = 0; j < nums.length; j++){  //uses nested for loop to check each element in the array by checking the first element and then every subsequent element in the array
     if(nums[i] + nums[j] == target)  //checks if the two elements add up to the target value
     { 
     return true;  //if the elements add up to the target it returns true
     }
  }
 }
}
return false;  //if the elements do not add up to the target value it returns false
}

// Do not edit this line;
module.exports = pairSum;
