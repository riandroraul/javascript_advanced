// Cara membuat Object pada javascript
// 1. object literal 
// PROBLEM = Tidak efekteif untuk object yang banyak 

// let Mahasiswa1 = {
// 	nama: 'Ignasius',
// 	energy: 10,
// 	makan: function (porsi) {
// 		this.energy = this.energy + porsi;
// 		console.log(`Halo ${this.nama}, Selamat Makan`);
// 	}
// }

// let Mahasiswa2 = {
// 	nama: 'Riandro',
// 	energy: 10,
// 	makan: function (porsi) {
// 		this.energy = this.energy + porsi;
// 		console.log(`Halo ${this.nama}, Selamat Makan`);
// 	}
// }

// 2. function declaration

// const methodMahasiswa = {
// 	makan: function (porsi){
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, Selamat Makan`);
// 	},
// 	main: function (jamMain){
// 		this.energi -= jamMain;
// 		console.log(`Halo ${this.nama}, Selamat Main`);
// 	},
// 	tidur: function (jamTidur){
// 		this.energi += jamTidur * 2;
// 		console.log(`Halo ${this.nama}, Selamat Tidur`);
// 	}
// }

// function Mahasiswa (nama, energi){
// 	let objMahasiswa = Object.create(methodMahasiswa);
// 	objMahasiswa.nama = nama;
// 	objMahasiswa.energi = energi;
// 	// objMahasiswa.makan = methodMahasiswa.makan;
// 	// objMahasiswa.main = methodMahasiswa.main;
// 	// objMahasiswa.tidur = methodMahasiswa.tidur;

// 	return objMahasiswa;
// }
// const Riandro = Mahasiswa('Riandro', 10);
// let Ignasius = Mahasiswa('Ignasius', 10,);

// 3. constructor function

// function Mahasiswa (nama, energi){
// 	this.nama = nama;
// 	this.energi = energi;

// 	this.makan = function (porsi){
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, Selamat Makan`);
	// }
// 	this.main = function (jamMain){
// 		this.energi -= jamMain;
// 		console.log(`Halo ${this.nama}, Selamat Main`);
// 	}
// 	this.tidur = function (jamTidur){
// 		this.energi += jamTidur * 2;
// 		console.log(`Halo ${this.nama}, Selamat Tidur`);
// 	}
// }
// const Ignasius = new Mahasiswa('Ignasius', 10);


// versi object dengan prototype inheritance (pewarisan)

// function Mahasiswa (nama, energi){
// 	this.nama = nama;
// 	this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi){
// 	this.energi += porsi;
// 	console.log(`Halo ${this.nama}, Selamat Makan`);
// }
// Mahasiswa.prototype.main = function (jamMain){
// 	this.energi -= jamMain;
// 	console.log(`Halo ${this.nama}, Selamat Main`);
// }
// Mahasiswa.prototype.tidur = function (jamTidur){
// 	this.energi += jamTidur * 2;
// 	console.log(`Halo ${this.nama}, Selamat Tidur`);
// }

// const Ignasius = new Mahasiswa('Ignasius', 10);
// const Riandro = new Mahasiswa('Riandro', 10);

// versi class 

// class Mahasiswa {
// 	constructor(nama, energi){
// 		this.nama = nama;
// 		this.energi = energi;
// 	}
// 	makan = porsi => {
// 	this.energi += porsi;
// 	console.log(`Halo ${this.nama}, Selamat Makan`);
// 	}
// 	main = jamMain => {
// 		this.energi -= jamMain;
// 		console.log(`Halo ${this.nama}, Selamat Main`);
// 	}
// 	tidur = jamTidur => {
// 		this.energi += jamTidur * 2;
// 		console.log(`Halo ${this.nama}, Selamat Tidur`);
// 	}
// 	kerja = jamKerja => {
// 		this.energi -= jamKerja / 2;
// 		console.log(`Halo ${this.nama}, Selamat Bekerja`);
// 	}
// }

// const Ignasius = new Mahasiswa('Ignasius', 10);
//    *
//   * *
//  * * *
// * * * *

// const printTriangle = num => {
// 	let text = '';
// 	for(let i = 0; i < num; i++){
// 	//   for(let j = 0; j < i; j++){
// 	// 	  text += ' ';
// 	//   }
// 	  for(let k = 0; k <= i; k++){
// 		text += '*';
// 	  }
// 	  text += '\n';
// 	}
// 	return text;
//   }
  
//   console.log(printTriangle(5))

const printSquare = num => {
	let text = '';
	for(let i = 0; i < num; i++){
	  for(let j = 0; j < num; j++){
		if(j == 0 && j == (num - 1)){
			text += '*';    
		}
		text += ' ';
	  }
	  text += '\n';
	}
	return console.log(text);
  }
  
  console.log(printSquare(4))