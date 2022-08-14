// fetch
showMovie();

async function showMovie(){
    const movies = await getMovies('avengers');
    updateUI(movies);
}

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function(){
    const keyword = document.querySelector('.input-keyword');
    const movies = await getMovies(keyword.value);
    updateUI(movies);
});    


// ketika tombol detail di klik
// event binding
document.addEventListener('click', async function(e){
    if(e.target.classList.contains('modal-detail-button')){
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbid);
        updateUIDetail(movieDetail);
    }
});

function getMovieDetail(id){
    return fetch('http://www.omdbapi.com?apikey=49d75a53&i='+id)
        .then(response => response.json())
        .then(movie => movie);
}
     
function updateUIDetail(detail){
    const movieDetail = showMovieDetail(detail);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}
        
function getMovies(keyword){
    return fetch('http://www.omdbapi.com?apikey=49d75a53&s='+ keyword)
            .then(response => response.json())
            .then(response => response.Search);
}

function updateUI(movies){
    let cards = '';
    movies.forEach(movie => cards += showCards(movie));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}

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