// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  console.log(getAllDirectors);
  const result = movies.map(pelicula => pelicula.director);
  result.sort();
  //console.table(result);//devuelve el array con los directores ordenados alfabéticamente, pero sin simplificar

  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  console.log("getMoviesFromDirector");
    const peliculasDirector = array.filter(movie => movie.director === director);
    //console.table(peliculasDirector);

    return peliculasDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const peliculasDirector = getMoviesFromDirector(array, director);
    const puntuacionesFiltradas = peliculasDirector.filter(movie => movie.score != undefined);//para array solo con las puntuaciones .map, si quisiera un array 
    // con objetos .filter
    let long = puntuacionesFiltradas.length;
    let total = puntuacionesFiltradas.reduce((acc, movie) => { return acc += parseFloat(movie.score) }, 0);
    let media = parseFloat((total / long).toFixed(2));

    return media;
  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
   //no son dos pasos uno detrás del otro, es en caso de que el año sea el mismo entonces ordena alfabéticamente    
   const peliculasOrdenadas = array.sort((a, b) => {
    if (a.year > b.year) { return 1 }
    if (a.year === b.year) {
        let ac = (a.title > b.title) ? 1 : -1;
        return ac;
    }//estoy suponiendo que no hay 2 peliculas que se llamen igual
    if (a.year < b.year) { return -1 }
});
console.table(peliculasOrdenadas);
return peliculasOrdenadas;
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
