import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost/api.php';
  peliculas: any[] = [];

  
  obtenerPeliculas() {
  return fetch(this.apiUrl + '/movies')
    .then(response => response.json())
    .then(response => {
      let arrayPeliculasRaw = response.movies.records;
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
}