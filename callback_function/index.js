// function tulisnama(nama){
//     console.log(nama);
//     nama();
// }

// function nama(){
//     alert('my name');
// }


// function tampilPesan(callback){
//     nama = prompt('masukan nama: ');
//     callback(nama);
// }
// tampilPesan(nama => alert(nama));

// const mhs = 
// [
//     {
//         nama: 'ignasius',
//         nim: '191011450014',
//         email: 'riandroraul@gmail.com',
//         kelas: '05TPLE001',
//         jurusan: 'Teknik Informatika'
//     },
//     {
//         nama: 'ferdian',
//         nim: '161011401112',
//         email: 'ferdian@gmail.com',
//         kelas: '05TPLE001',
//         jurusan: 'Teknik Informatika'
//     },
//     {
//         nama: 'angelica',
//         nim: '191011450023',
//         email: 'angelica@gmail.com',
//         kelas: '05TPLE001',
//         jurusan: 'Teknik Informatika'
//     },
//     {
//         nama: 'Dennis eka',
//         nim: '191011450125',
//         email: 'denniseka@gmail.com',
//         kelas: '05TPLE001',
//         jurusan: 'Teknik Informatika'
//     }
    
// ];

// console.log('mulai');
// mhs.forEach(val => {
//     for(let i = 0; i < 10000000; i++){
//         let date = new Date();
//     }
//     console.log(val.nama);
// });
// console.log('selesai');


// asyncronous callback
// function getDataMahasiswa(url, success, error){
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 success(xhr.response);
//             }else if(xhr.status === 404){
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('data.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(val => console.log(val.nama))
// }, () => {
//     console.log('error')
// })
// console.log('selesai');

// JQuery

// console.log('mulai');
// $.ajax({
//     url: 'data.json',
//     success: mhs => {
//         mhs.forEach(val => console.log(val.nama))
//     },
//     error: e => {
//         console.log(e.responseText)
//     }
// })

// console.log('selesai');

// OMDB movie api

$('.search-button').on('click', function(){
    $.ajax({
        url: 'http://www.omdbapi.com?apikey=49d75a53&s=' + $('.input-keyword').val(),
        success: results => {
            const movies = results.Search;
            let cards = '';
            movies.forEach(m => {
                cards += showCards(m);
            });
            $('.movie-container').html(cards);
    
            // ketika tombol detail di klik
            $('.modal-detail-button').on('click', function(){
                $.ajax({
                    url: 'http://www.omdbapi.com?apikey=49d75a53&i=' + $(this).data('imdbid'),
                    success: m => {
                        const movieDetail = showMovieDetail(m);
                        $('.modal-body').html(movieDetail);
                    }
                })
            })
        },
        error: (e) => {
            console.log(e.responseText)
        }
    })
})

$.ajax({
    url: 'http://www.omdbapi.com?apikey=49d75a53&s=transformers',
    success: results => {
        const movies = results.Search;
        let cards = '';
        movies.forEach(m => {
            cards += showCards(m);
        });
        $('.movie-container').html(cards);

        // ketika tombol detail di klik
        $('.modal-detail-button').on('click', function(){
            $.ajax({
                url: 'http://www.omdbapi.com?apikey=49d75a53&i=' + $(this).data('imdbid'),
                success: m => {
                    const movieDetail = showMovieDetail(m);
                    $('.modal-body').html(movieDetail);
                }
            })
        })
    },
    error: (e) => {
        console.log(e.responseText)
    }
})

function showCards(m){
   return `<div class="col-12 col-md-6 col-sm-12 col-lg-4 ">
            <div class="card h-100" style="width: 18rem;">
                <img src="${m.Poster}" class="card-img-top">
                <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movie-detail" data-imdbid="${m.imdbID}">Show Detail</a>
                </div>
            </div>
        </div>`;
}

function showMovieDetail(m){
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                    <ul class="list-group">
                        <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                        <li class="list-group-item"><strong>Realesed: </strong>${m.Released}</li>
                        <li class="list-group-item"><strong>Director: </strong>${m.Director}</li>
                        <li class="list-group-item"><strong>Actors: </strong>${m.Actors}</li>
                        <li class="list-group-item"><strong>Writer: </strong>${m.Writer}</li>
                        <li class="list-group-item"><strong>Plot: </strong><br>${m.Plot}</li>
                        <li class="list-group-item"><strong>Genre: </strong><br>${m.Genre}</li>
                        <li class="list-group-item"><strong>Language: </strong><br>${m.Language}</li>
                        <li class="list-group-item"><strong>Country: </strong><br>${m.Country}</li>
                        <li class="list-group-item"><strong>Awards: </strong><br>${m.Awards}</li>
                        <li class="list-group-item"><strong>Runtime: </strong><br>${m.Runtime}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}