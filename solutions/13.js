//Rahul Kalra
//Checking to see if the string is palindrome
const solution2 = (palindromeInput) =>{
  let reverse = "";
  for(let i = palindromeInput.length - 1; i >= 0; i--){
    reverse += palindromeInput[i];
  }
  if(reverse === palindromeInput){
    return true;
  }
  return false;
};

// vdewinter
// Return true if input string is a palindrome

const solution = (str) => {
	const strLen = str.length;
	const midpoint = Math.floor(strLen / 2);
	const splitFrom = (strLen % 2 == 0) ? midpoint : midpoint + 1;
	for (let i = 0; i < splitFrom; i++) {
		if (str.substring(i, i + 1) !== str.substring(strLen - i - 1, strLen - i)) {
			return false;
		}
	}
	return true;
};

module.exports = {
  solution,
  solution2
};

