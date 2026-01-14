import { Component, inject, OnInit,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApi } from '../interfaces/movie-api';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/movies-api';

@Component({
  selector: 'app-edit-movie',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-movie.html'
})
export class EditMovieComponent implements OnInit {
  
  private route = inject(ActivatedRoute);
  private ClaseApiPeli = inject(ApiService);
  private cd = inject(ChangeDetectorRef);
  private router = inject(Router);

  movie: MovieApi = { 
    id: 0, 
    name: "", 
    year: 0, 
    description: "", 
    duration: "", 
    genre: "",
    raiting: "",
    imageUrl: "" 
};
  editing = false;

  async ngOnInit() {
  const id = Number(this.route.snapshot.params['id']);

  if (id) {
    this.editing = true;  
    this.movie = await this.ClaseApiPeli.ObtenerUnapelicula(id);
    this.cd.detectChanges();
    
  }
}

  guardar() {
    if (this.editing) {
      this.ClaseApiPeli.guardarPelicula(this.movie);
    } else {
      this.ClaseApiPeli.crearPelicula(this.movie);
    }
    
    this.router.navigate(['/home']);
  }
}