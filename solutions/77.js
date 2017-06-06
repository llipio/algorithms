// Rahul Kalra
// Given a string, return an object that shows how many vowels and consonanants there are

const solution = (string) =>{
  let vowels = ['a', 'e', 'i', 'o','u'];
  let count = 0;
  let data = {};

  for(let i = 0; i < string.length; i++){
    for(let j = 0; j < vowels.length; j++){
      if(string[i] === vowels[j]){
        count++;
        data["vowel"] = count;
        data["consonant"] = string.length - count;
      }
    }
  }
  return data;
};

module.exports = {solution};
