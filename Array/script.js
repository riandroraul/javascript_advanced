let arr = ['mangga', 'pisang', 6, true];

// let arr3 = arr[arr.length - 3];
// console.log(arr3);
// console.log(arr);
console.log(arr.toString());
let newArr = arr.push('jambu');
// console.log(newArr);

// arr.forEach(function(item, index, array){
//     console.log(item, index);
// });

arr.pop(); //hapus value pada index terakhir array
arr.shift(); // hapus value pada index pertama/depan
arr.unshift('apel'); // menambah value pada index pertama/depan

arr.forEach(function(item, index, array){
console.log(item, index);
});

let vegetables = ['jackfruit', 'spinach', 'cabbage', 'soup'];

let newVegetables = vegetables.splice(2,2);
let copyVegetables = [...vegetables];

// newVegetables.forEach((item, index, array) => console.log(item));
console.log(newVegetables);
console.log(copyVegetables);
console.log(vegetables['2']);

let arr2 = ['this is the first element', 'this is the second element', 'this is the last element'];
console.log(arr2[0])              // logs 'this is the first element'
console.log(arr2[1])              // logs 'this is the second element'
console.log(arr2[arr2.length - 1]) // logs 'this is the last element'
