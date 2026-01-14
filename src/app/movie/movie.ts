import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../services/movies-api';
import { MovieApi } from '../interfaces/movie-api';



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

  @Input() pelicula!: MovieApi; 
  router: Router = inject(Router);
  private ClaseApiPeli = inject(ApiService);
  


  eliminar(id:number){
    this.ClaseApiPeli.eliminarPelicula(id);
    window.location.reload();
  }
  editar(id:number){
    this.router.navigate(['/form', id]);
  }
}
