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
//ex6, modificacion del ejercio 2
function getMoviesFromProperty(array, propiedad, value) {//OK
  console.log("getMoviesFromProperty");
  let x = propiedad;
      switch (x) {
      case "director": const peliculasDirector = array.filter((movie) => movie.director === value);
          console.table(peliculasDirector);
          return peliculasDirector;
          break;
      case "genre": const peliculasGenero = array.filter(movie => movie.genre.includes(value));
          console.table(peliculasGenero);
          //const puntuacionesPeliculasGenero = peliculasGenero.map(movie => movie.score);
          //console.table(puntuacionesPeliculasGenero);
          return peliculasGenero;
          break;
      case "year": peliculasAño = array.filter((movie) => movie.year === value);
          console.table(peliculasAño);
          return peliculasAño;
  }
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

  //ex 6, modificacion del ejercicio 3
function moviesAverage(array) {//aqui le llega ya el array de peliculas de objetos de un director dado
  const puntuacionesFiltradas = array.map(movie => movie.score).filter(item => item !== undefined); //genero un array 
  //de puntuaciones válidas
  let total = puntuacionesFiltradas.reduce((ac, item) => { return ac += item });
  let long = puntuacionesFiltradas.length;
  let media = parseFloat((total / long).toFixed(2));
  console.log(media);
  return media;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  console.log("orderAlphabetically");
  const titulosPeliculas = array.map(movie => movie.title.toLowerCase());//devuelve un array con solo los títulos
  console.table(titulosPeliculas);
  //las pongo en minusculas para que ordene alfabeticamente correctamente, que no ponga ET antes que El niño 
  //las ordeno alfabéticamente:
  titulosPeliculas.sort();
  //solo mostrar las 20 primeras peliculas 
  const primerasPeliculas = titulosPeliculas.filter((element, index) => index < 20);

  console.table(primerasPeliculas);
  return primerasPeliculas;
}

// Exercise 5: Order by year, ascending
function orderByYear() {
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

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {
  // category indica la prop del objeto (director, genre, year) y value su valor (spilbert, acction, 1982)
  console.log("moviesAverageByCategory");
  const peliculasGenero = getMoviesFromProperty(movies, "genre", value);

  console.table(peliculasGenero);
  //let long = peliculasGenero.length;
  let media = moviesAverage(peliculasGenero);
  console.log(media);
  return media;

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {
  function hoursToMinutes(array) {
    console.log("hoursToMinutes");
    const peliculasEnMinutos = array.filter(item => item.duration = generarArrayTiempo(item.duration));
    console.table(peliculasEnMinutos);
}

//const peliculasHoras = array.map((movie) => { movie.duration.replace(/h/gi, "") });//quito la h
//const peliculasMinutos = peliculasHoras.map((movie) => { movie.duration.replace(/min/gi, "") });//quito la  min
//¿PORQUE NO FUNCINAN LAS EXP REG?
function generarArrayTiempo(string) {//OK, PERO HAY QUE SIMPLIFICAR
    console.log("generarArrayTiempo");

    let tiempoFinal = 0;
    if (string.includes("h") && string.includes("min")) {
        let sinHoras = string.replace("h", "");//quito el caracter h, si lo hago con un parseInt pierdo la parte de min 
        let sinMinutos = sinHoras.replace("min", "");//quito el caracter min
        const tiempo = sinMinutos.split(" "); // ahora en duration hay un arry de long 2
        tiempoFinal = parseInt(tiempo[0] * 60) + parseInt(tiempo[1]);
    } else if (string.includes("h") && !string.includes("min")) {//solo hay  horas
        tiempoFinal = parseInt(string);
        tiempoFinal *= 60;
    } else if (!string.includes("h") && !string.includes("min")) {//solo hay  minutos
        tiempoFinal = parseInt(string);
    }
    return tiempoFinal;
}


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
