function fizzBuzz(start, end) {
  let sizeOfArray = (end-start)+1;  //sets size equal to end minus start, which if offset by one
  let count = 0;  //creates a count variable that is equal to 0
  let newArray = new Array (sizeOfArray); //initializes an array of the specified size 
  for(let i = start; i <=end;  i++)
  {
   if(i % 3 == 0 && i % 5 == 0){  //goes through the array and checks if an element is a multiple of both 3 and 5
   newArray[count] = "FizzBuzz";  //if the element is a multiple of 3 and 5, add "FizzBuzz" to the array
   }
   else if(i % 3 ==  0){  //checks if a value is a multiple of 3
   newArray[count] = "Fizz" //if the value is a multiple of 3, add "Fizz" to the array
   }
   else if(i % 5 == 0){ //checks if a value is a multiple of 5
   newArray[count] = "Buzz";  //if the value is a multiple of 5, add "Buzz" to the array
   }   
  else{
  newArray[count] = i;  //if not a multiple of 3 or 5, print out that value
  }
  count ++;  //increment the count by one
 }
return newArray;  //output the final array which is called newArray
}

// Do not edit this line;
module.exports = fizzBuzz;
