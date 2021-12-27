class MySolution {
  constructor() {
    this.flag = false; // flag set to false which is optional to use
  }
  binarySearch(nums, target) {
  let middle = Math.floor(nums.length/2); //set middle value of the numbers which is equal to the length of nums, divided by 2 and gets the floor by rounding down
  let arrNew = nums.slice(0);  //create a copy of nums which is called arrNew to use within the code
  if(arrNew[middle] == target){  //if middle value equals target, it has been found and program returns true
  return true;  
  }
  if(arrNew[middle] < target){  //if middle value is less than target, it recursively calls the function and checks upper half of array first
  return this.binarySearch(arrNew.splice(middle, arrNew.length-1), target);  
  }
  if(arrNew[middle] > target){  //if middle value is larger than target, it recursively calls the function and check lower half of array
  return this.binarySearch(arrNew.splice(0, middle), target); 
  }
  else{
  return false;  //if target is not found the program will return false
  }
}
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
