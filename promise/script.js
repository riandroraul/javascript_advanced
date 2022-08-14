// menggunakan Jquery

// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=49d75a53&s=avengers',
//     success: movies => console.log(movies)
// });

// menggunakan vanila javascript

// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function(){
//     if (xhr.status === 200){
//         if(xhr.readyState === 4){
//             console.log(JSON.parse(xhr.response));
//         }
//     }else{
//         console.log(xhr.responseText)
//     }

// }
// xhr.open('get','http://www.omdbapi.com/?apikey=49d75a53&s=avengers');
// xhr.send();

// menggunakan fetch
// fetch('http://www.omdbapi.com/?apikey=49d75a53&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response))

// Promise adalah object yang merepresentasikan keberhasilan / kegagalan dari sebuah event yang asyncronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// state / keadaan (fulfilled / rejected / pending)
// callback (resolve , reject , finally)
// aksi (then / catch)

// contoh
// let ditepati = false;
// const janji = new Promise((resolve, reject) => {
//     if(ditepati){
//         resolve('janji telah dipati!');
//     } else{
//         reject('ingkar janji');
//     }
// });

// janji
//     .then(response => console.log(`OK! ${response}`))
//     .catch(response => console.log(`NOT OK! ${response}`))

// let ditepati = false;
// const janji2 = new Promise( (resolve, reject) => {
//     if(ditepati){
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu!');
//         }, 2000)
//     }else{
//         setTimeout( () => {
//             reject('tidak ditepati setelah beberapa waktu!');
//         }, 2000)
//     }
// });


// console.log('mulai')
// console.log(janji2.then( () => console.log(janji2)))
// janji2
//     .finally(() => console.log('selesai menunggu'))
//     .then( response => console.log(`OK ${response}`))
//     .catch( response => console.log(`NOT OK ${response}`))
// console.log('selesai')

// Promise.all

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'evengers',
            sutradara: 'john lennon',
            pemeran: 'Doddy, Erik'
        }]);
    }, 1000)
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'serang',
            temp: 27,
            kondisi: 'Hujan'
        }]);
    }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
// .then(response => console.log(response))
.then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
})