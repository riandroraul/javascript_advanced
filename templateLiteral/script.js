// const nama = 'riandro raul';
// const umur = 25;

// console.log(`halo nama saya ${nama} umur saya ${umur} tahun`);

// embedded expression
// console.log(`${2 * 3}`);

// const angka = 11;
// console.log(`${angka % 2 == 0 ? 'genap' : 'ganjil'}`);


// html fragments
// const mhs = {
//     nama: 'riandro raul',
//     umur: 24,
//     nim: '191011450014',
//     email: 'riandroraul@gmail.com'
// }

// const el = `<div class="mhs">
//     <h2> ${mhs.nama} </h2>
//     <h2 class="">${mhs.umur}</h2>
//     <span class="nim"> ${mhs.nim} </span>
// </div>`;


// looping
// const mhs = [
//     {
//         nama: 'riandro raul',
//         email: 'riandroraul@gmail.com'
//     },
//     {
//         nama: 'aridansyah',
//         email: 'ferdiansyah@gmail.com'
//     },
//     {
//         nama: 'ferdiansyah',
//         email: 'ferdiansyah@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul class="">
//         <li> ${m.nama} </li>
//         <li> ${m.email} </li>
//     </ul>`).join('')}
// </div>`;


// conditionals
// ternary

// const lagu = {
//     judul: 'tetap dalam jiwa',
//     penyanyi: 'isyana sarasvati',
//     feat: 'Rayi saputra'
// }

// const el = `<div class="mhs">
//     <ul>
//         <li> ${lagu.penyanyi} </li>
//         <li> ${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''} </li>
//     </ul>
// </div>`

// Nested
// html fragments bersarang

// const mhs = {
//     nama: 'riandro raul',
//     semester: 5,
//     matkul: [
//         'rekayasa perangkat lunak',
//         'sistem informasi',
//         'pemrograman interaktif',
//         'perancang sistem berorientasi object'
//     ]
// }

// function cetakMataKuliah(matkul){
//     return `
                // <ol>
//                 ${matkul.map(mk => `<li> ${mk} </li>`).join('')}
//             </ol>
            // `;
// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="semester"> ${mhs.semester} </span>
//     <h4>Mata Kuliah: </h4>
//     ${cetakMataKuliah(mhs.matkul)}
// </div>`


// document.body.innerHTML = el;


// tagged template
function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for (value of arrayOfNumbers) {
        if (value < currentMin) {
            currentMin = value;
        } else if (value > currentMax) {
            currentMax = value;
        }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);

let angka = 21;
console.log(`angka adalah bilangan ${angka % 2 == 0 ? 'genap' : 'ganjil'}`);


// html fragments

// const mhs = {
//     nama: 'Ignasius Riandro Raul',
//     nim: '191011450014',
//     email: 'riandroraul@gmail.com',
//     jurusan: 'Teknik Informatika'

// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <h2>${mhs.nim}</h2>
// </div>`;

// console.log(el);
// document.body.innerHTML = el;

const tombol = document.querySelector('.klik');

const mhs = [
    {
        nama: 'riandro',
        nim: '191011450014',
        email: 'rianroraul@gmail,com',
        jurusan: 'Teknik Informatika',
        matkul: [
                    'rekayasa perangkat lunak',
                    'sistem informasi',
                    'pemrograman interaktif',
                    'perancang sistem berorientasi object'
                ]
    },
    {
        nama: 'denis',
        nim: '191011450023',
        email: 'denis@gmail,com',
        jurusan: 'Teknik Informatika',
        matkul: [
            'rekayasa perangkat lunak',
            'sistem informasi',
            'pemrograman interaktif',
            'perancang sistem berorientasi object'
        ]
    },
]

const cetakMataKuliah = matkul => {
   return `${matkul.map(mk => `<ul><li>${mk}</li></ul>`)}`
};

tombol.addEventListener('click', mhs.map(m => document.write(`
<ul>
    <li>${m.nama}</li>
    <li>${m.nim}</li>
    <li>${m.email}</li>
    <li>${m.jurusan}</li>
    <li>
    Mata Kuliah : 
        ${cetakMataKuliah(m.matkul)}
    </li>
</ul>`)));