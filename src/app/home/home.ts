import { Component, inject } from '@angular/core';
import { MovieComponent } from '../movie/movie';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MovieComponent, CommonModule],
  template: `
    <div class="card-body">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Genero</th>
            <th>Año</th>
            <th>Duracion</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          @for (movie of movies; track movie.id) {
            <tr app-movie [pelicula]="movie"></tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styleUrl: './home.css',
})
export class Home {
  private ClasePelicula = inject(MoviesService);
  movies = this.ClasePelicula.getAllMovies();

  
}