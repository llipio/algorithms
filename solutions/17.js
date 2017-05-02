// Tri Le
// Square 2D Array

const solution = (arr) => {
  if(arr.length == 0){
    return false;   
  }
  for(let i=0; i<arr.length; i++){
    if(arr.length != arr[i].length){
      return false;
    }
  }
  return true; 
}

module.exports = {
  solution
};
