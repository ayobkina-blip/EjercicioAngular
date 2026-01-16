import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../services/movies-api';
import { MovieApi } from '../interfaces/movie-api';
import { StarComponent } from '../star/star';




@Component({
  selector: '[app-movie]',
  imports: [CommonModule, StarComponent],
  template: `
    <td>{{pelicula.id}}</td>
    <td>{{pelicula.name}}</td>
    <td>{{pelicula.description}}</td>
    <td>{{pelicula.genre}}</td>
    <td>{{pelicula.year}}</td>
    <td>{{pelicula.duration}}</td>
      <td>
        <app-star [rating]='pelicula.rating' [id]='pelicula.id' 
            (ratingClicked)='ClickSobreEstrellas($event)'>
        </app-star>
      </td>
    
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
  ClickSobreEstrellas(message: string): void {
    	 //this.Mensaje = 'Lista de Peliculas: ' + message;
   	var id:number = Number(message);
        this.pelicula.rating++;

	this.ClaseApiPeli.guardarPelicula(this.pelicula);
    
    }
}
