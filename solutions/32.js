//Rahul Kalra
//Finding Singleton

const solution = (array) =>{
  let data = {};
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    if(!(data[array[i]])){
      data[array[i]] = 1;
    }
      else{
        data[array[i]]++;
      }
    }
    for(let key in data){
      if(data[key] === 1){
        newArray.push(Number(key));
      }
    }
  return newArray;
};

module.exports = {solution};
