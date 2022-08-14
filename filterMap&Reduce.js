const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >=3
// const newAngka = [];
// for(let i = 0; i < angka.length; i++){
//     if (angka[i] >= 3){
//         newAngka.push(angka[i]);
//     }

// }
// console.log(newAngka);

// filter
// const newAngka = angka.filter(function(a){ //a = merepresentasikan tiap tiap elemen array angka
//     return a >= 3;
// });

// arrow function
// const newAngka = angka.filter(a => a >= 3);

// console.log(newAngka);

// map
// kalikan semua angka dengan dua
// const newAngka = angka.map(a => a *= 2);

// console.log(newAngka);

// reduce
// jumlahkan semua elemen pada array angka 
// 5 + angka = -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5);

// console.log(newAngka);

// methode chaining
// cari angka yang lebih besar dari 5
// kalikan 3
// jumlahkan 
const hasil = angka.filter(a => a >= 5)
.map(a => a * 3) // 24,27,27
.reduce((acc, cur) => acc + cur);

console.log(hasil);