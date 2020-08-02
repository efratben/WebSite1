prefix = "https://images-na.ssl-images-amazon.com/images/M";
function init() {
    posterArr = [];
    for (var i = 0; i < posters.length; i++) {
        posterArr[posters[i].imdbId] = posters[i].Poster;
    }
   
    handleData(movies, posterArr);
}

function handleData(movies, posterArr) {
    for (var i = 0; i < movies.length; i++) {
        g = movies[i].genres;
        g = g.replace(/'/g, '"');
        movies[i].genres = JSON.parse(g);
        let id = movies[i].imdb_id.substring(2, movies[i].imdb_id.length);
        movies[i].poster_path = prefix + posterArr[id];
    }
}