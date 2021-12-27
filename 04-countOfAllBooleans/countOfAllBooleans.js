function countOfAllBooleans(arr) {
  let count = 0; //establishes a count vairable
  for (let i = 0; i<arr.length; i++)	//for loop to check go through the array			
	{	
	   if(typeof arr[i] == "boolean") //checks if the values are boolean
	   count++; //increments count if the value is a boolean
	}
	return count; //returns the count
}

// Do not edit this line;
module.exports = countOfAllBooleans;
