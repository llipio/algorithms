//Rahul Kalra
//Find Pairs that add up to X

const solution = (array, x) =>{
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
      if( array[i] + array[j] === x){
         newArray.push([array[i], array[j]]);
      }
    }
  }
  return newArray;
};

module.exports = {solution};

