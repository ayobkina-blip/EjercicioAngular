import { Component, inject } from '@angular/core';
import { MovieComponent } from '../movie/movie';
import { CommonModule } from '@angular/common';
import { MovieApi } from '../interfaces/movie-api';
import { Router } from '@angular/router';
import { ApiService } from '../services/movies-api';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MovieComponent, CommonModule],
  template: `
    <div class="card-body">
      <button class="btn btn-primary btn-sm" (click)="editar()">Nuevo</button>
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
  private ClaseApiPeli = inject(ApiService);
  private router = inject(Router);
  movies: any[] = [];

  constructor() {
    this.ClaseApiPeli.obtenerPeliculas().then(datos => {
      this.movies = datos;
    });
  }

  editar() {
    this.router.navigate(['/form']);
  }
}