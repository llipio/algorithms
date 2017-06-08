// Rahul Kalra
// Return array of largest 3 values in descending order from a given array

const max = (array) =>{
  let max = array[0];
  for(let i = 0; i < array.length; i++){
    if(max <= array[i+1]){
      max = array[i+1];
    }
  }
    return max;
};

const removeNum = (array, max) =>{
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    if(!(max === array[i])){
      newArray.push(array[i]);
    }
  }
  return newArray;
};

const solution = (array) =>{
  let a = 0;
  let newArray = [];
  for(let i = 0; i < 3; i++){
    a = max(array);;
    array = removeNum(array, a); 
    newArray.push(a);
  }
  return [newArray[0], newArray[1], newArray[2]];
};

module.exports = {solution};
