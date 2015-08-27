// var range = function(start, end){
//  if(typeof start === 'number' && typeof end === 'number'){
//    var product = [];
//         for(var i = start; i <= end; i++){
//           product.push(i);
//    }
//         return product;
//  }else{
//    return "Sorry, please provide two numbers."
//  }
// }
//console.log(range(1, 10));

//function range(start, end, step) {
//   if (step == null) step = 1;
//   var array = [];

//   if (step > 0) {
//     for (var i = start; i <= end; i += step)
//       array.push(i);
//   } else {
//     for (var i = start; i >= end; i += step)
//       array.push(i);
//   }
//   return array;
// }

// function sum(array) {
//   var total = 0;
//   for (var i = 0; i < array.length; i++)
//     total += array[i];
//   return total;
// }

// console.log(sum(range(1, 10)));
// // → 55
// console.log(range(5, 2, -1));



// function reverseArray(array) {
//   var output = [];
//   for (var i = array.length - 1; i >= 0; i--)
//     output.push(array[i]);
//   return output;
// }

// function reverseArrayInPlace(array) {
//   for (var i = 0; i < Math.floor(array.length / 2); i++) {
//     var old = array[i];
//     array[i] = array[array.length - 1 - i];
//     array[array.length - 1 - i] = old;
//   }
//   return array;
// }
// console.log(reverseArray(["A", "B", "C"]));
// ["C", "B", "A"];
// var arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);

// var arrayToList = function(array) {
//   var list = null;
//   for(var i = array.length - 1; i >= 0; i--) {
//     console.log(i)
//     list = {value: array[i], rest: list};
//   }
//   return list;
// };

// function listToArray(list) {
//   var array = [];
//   for (var node = list; node; node = node.rest)
//     array.push(node.value);
//   return array;
// }

// console.log(arrayToList([10, 20]));
// list = arrayToList([10,20,30,40]);
// array = listToArray(list);
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

var names = ["ben", "mike", "candice"];

    function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
console.log(cap("ben"));

function forCapitalize(arr){
  var newArray = [];

  for (i = 0; i < arr.length - 1; i++){
    var name = capitalize(arr[i]);
    newArray.push(name);
    
  }
  return newArray;
   
}
// console.log(cap(names[i]));

function mapCapitalize(arr){
  return arr.map(cap);
}
console.log(mapCapitalize(names));   
