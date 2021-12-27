function titleCaseEdit(title) {
  const arr1 = title.split(" ");   //splits title into an array of strings when a space is detected

for (let i = 0; i < arr1.length; i ++)
{
arr1[i] = arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1);   //traverses the array and capitalizes the first letter of every word in the array
}

const title_new = arr1.join(" ");   //creates a new string with new title that is separated by spaces
return title_new; //returns the new title
}
// Do not edit this line;
module.exports = titleCaseEdit;

