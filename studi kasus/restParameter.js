const myArr = [1,2,3,4,5,6];

function myfunc(...arr){
    return arr;
}

function func2(){
    return Array.from(arguments);
}

// console.log(func2(myArr))

// array destrcuturing 

// const kelPkm = ['Rifqi', 'Rahman', 'Iqbal', 'Bayu', 'Rian', 'Aryanda', 'Anas', 'Andri'];

// const [ketua, wakil, ...anggota] = kelPkm;

// console.log(anggota)

// object destructuring

// const pkm = {
//     ketua: 'Rifqi',
//     wakil: 'Rahman',
//     dospem: 'Pak firman',
//     anggota: ['Iqbal', 'Bayu', 'Ignas', 'Aryanda', 'Anas', 'Andri'],
// }

// const {ketua, wakil, dospem, ...anggota} = pkm;

// console.log(anggota)

// filtering

// function filterBy(type, ...values){
//     return values.filter(val => typeof val === type)
// }

// console.log(filterBy('boolean', 1,2,false,true, 10, 'rian', 'awal'))

function table(...values){
    if(typeof values === Number){
        values.toString();
    }
    return values[2].length;
}

console.log(table(3, 'andika', 4344, 'sdfdsf'))

