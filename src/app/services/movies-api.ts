import { Injectable } from '@angular/core';
import { MovieApi} from '../interfaces/movie-api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //private apiUrl = 'http://localhost/api.php';
  private apiUrl = 'http://localhost:8080/api.php';
  peliculas = [];

  
  obtenerPeliculas() {
  return fetch(this.apiUrl + '/movies')
    .then(res => res.json())
    .then(data => {
      let arrayPeliculasRaw = data.movies.records;
      return arrayPeliculasRaw.map((pelicula: any) => ({
        id: pelicula[0],
        name: pelicula[1],
        year: pelicula[2],
        description: pelicula[3],
        duration: pelicula[4],
        genre: pelicula[5],
        rating: pelicula[6],
        imageUrl: pelicula[7]
      }));
    });
}

  ObtenerUnapelicula(id:any){
    return fetch(this.apiUrl +'/movies/'+id)
      .then(response=> response.json())
      .then(response=> {
        let peliculaRaw = response;
        return peliculaRaw;
      });
  };


  guardarPelicula(movie: MovieApi) {
  return fetch(this.apiUrl + '/movies/' + movie.id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  })
  .then(response => {
    return response.json();
  });
}


  crearPelicula(movie: MovieApi) {
  return fetch(this.apiUrl + '/movies', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  })
  .then(response => {
    return response.json();
  });
}


  eliminarPelicula(id:any){
    return fetch(`${this.apiUrl}/movies/${id}`, {
    method: 'DELETE', 
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    return response.json();
  });
  }
}
