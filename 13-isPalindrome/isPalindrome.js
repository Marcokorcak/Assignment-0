function isPalindrome(word) {
  const wordLen = word.length;  //creates a const variable that is equal to the length of the word
  for(let i = 0; i < wordLen/2; i++)
  {
   if(word[i] != word[wordLen-1-i])  //goes through the first half of word and checks if first and second string are equal
   {
   return false;  //output false if the word is not a palindrome
   }  
}
return true;  //output true if the word is a palindrome
}


// Do not edit this line;
module.exports = isPalindrome;
