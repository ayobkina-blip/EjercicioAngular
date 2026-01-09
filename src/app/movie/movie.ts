import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Peli} from '../interfaces/movie';
import { Router } from '@angular/router';
import { MoviesService } from '../movies.service';



@Component({
  selector: '[app-movie]',
  imports: [CommonModule],
  template: `
    <td>{{pelicula.id}}</td>
    <td>{{pelicula.name}}</td>
    <td>{{pelicula.description}}</td>
    <td>{{pelicula.genre}}</td>
    <td>{{pelicula.year}}</td>
    <td>{{pelicula.duration}}</td>
    <td>
      <button class="btn btn-primary btn-sm" (click)="eliminar(pelicula.id!)">Eliminar</button>
      <button class="btn btn-primary btn-sm" (click)="editar(pelicula.id!)">Editar</button>
    </td>
  `,
  styleUrl: './movie.css',
})
export class MovieComponent {

  @Input() pelicula!: Peli; 
  router: Router = inject(Router);

  movieService = inject(MoviesService);

  eliminar(id:number){
    this.movieService.delete(id);
  }
  editar(id:number){
    this.router.navigate(['/form', id]);
  }
}
