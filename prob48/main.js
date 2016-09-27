//Intersection: Write a function called intersection that takes two arrays as arguments and returns an array of the items that are in both input arrays. For example => intersection([1,2,3], [1,3,5]) should return [1,3]. Write tests!
function intersection(arr1, arr2){
  var newArr = [];
  for(var i = 0; i < arr1.length ; i++){
    for(var j = 0; j < arr2.length ; j++){
      if(arr1[i] === arr2[j]){
        newArr.push(arr1[i]);
      }
    }
  }
  return newArr;
}
