function setUnionOfAnyAmountOfSets(...args) {
  let setFinal = new Set;  //creation of a new set that will contain all other sets
  for(let i = 0; i < args.length; i++)
	{
  for(const num of args[i]){   //nested loop that goes through each set, and then each element in the set
    setFinal.add(num); //adds element to the new set
			   }
	}
return setFinal;  //return the final set which is a joined set
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
