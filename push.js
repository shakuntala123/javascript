let arr =['java', 'Go','javaScript', 'c#']
console.log(' Currently arr values' , arr)
arr.push('Python');
arr.push('c++');
console.log('After adding element',arr);
console.log('Pop element from the array');
arr.pop()
console.log('Element in the array after removing : ', arr);

console.log("shift method" )
let s = arr.shift();
console.log( " element shifted : " , s)
console.log("element left after shifting : " , arr)