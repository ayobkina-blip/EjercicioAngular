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
        this.peliculas = []; 

        arrayPeliculasRaw.forEach((pelicula: any) => {
          this.peliculas.push({
            id: pelicula[0],
            name: pelicula[1],
            year: pelicula[2],
            description: pelicula[3],
            duration: pelicula[4],
            genre: pelicula[5],
            rating: pelicula[6],
            imageUrl: pelicula[7]
          });
        });
        return this.peliculas;
      })
      .catch(error => {
        console.error('Error:', error);
        return [];
      });
  }
}