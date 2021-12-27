class MySolution {
  countDownSum(num) {
    if (num <=1){  //base case for recursion so the recursion stops when num <= 1
   return num; //return the final num which is the sum because the base case has been reached
   }
   else{
  return  num + this.countDownSum(num-1);  //recursive code to call the function again and decrement num
  }
 }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
