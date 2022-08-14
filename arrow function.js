const welcome = (time, name) => {
	return `Selamat ${time}, ${name}`;
}

// console.log(welcome('Siang', 'Doddy'));

// let Mahasiswa = ['Ignasius Riandro Raul', 'Mustofa', 'Vitores Nababan'];

// let jmlHuruf = Mahasiswa.map(nama => nama.length);
// console.log(jmlHuruf);

// let jmlHuruf = Mahasiswa.map(nama => ({nama: nama, jmlHuruf: nama.length}));

// console.table(jmlHuruf);


// const tombol = document.querySelector('.button');

// tombol.addEventListener('click', function(){
//     alert('hello');
// })

// constructor function 
// const mahasiswa = function(){
//     nama = 'ignasius';
//     umur = 24;
//     this.sayHello = function(){
//         console.log(`Halo nama saya ${nama} dan saya ${umur} tahun`);
//     }
// }

// const saya = new mahasiswa();

const mahasiswa = function(){
    nama = 'ignasius';
    umur = 24;
    this.sayHello = function(){
        console.log(`Halo nama saya ${nama} dan saya ${umur} tahun`);
    }
}

const saya = new mahasiswa();

