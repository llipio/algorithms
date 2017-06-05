// return longest string

// input: ['hi','hello','hola']
// output 'hello'

const solution = (arr) => {
  let length = 0;
  let word = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length > length){
      length = arr[i].length;
      word = arr[i];
    }
  }
  return word;
};
module.exports = {
  solution
};
