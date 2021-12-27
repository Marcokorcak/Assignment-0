function frequencyCounter(word) {
  let freqWord ={};  //initialize a new object to hold key pair values
  for(let i =0; i < word.length; i++)
  {
  let character = word.charAt(i);  //variable character is equal to a character at the index in the word
  if(freqWord[character]){
  freqWord[character]++;  //if the character exists, then freqWord is incremented by one
  }
  else{
  freqWord[character] =1;  //if a new letter is found, freqWord is set equal to one
  }
}
return freqWord; //returns final freqWord object
}

// Do not edit this line;
module.exports = frequencyCounter;
