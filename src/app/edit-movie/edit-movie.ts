import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Peli } from '../interfaces/movie';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-movie',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-movie.html'
})
export class EditMovieComponent implements OnInit {
  
  private route = inject(ActivatedRoute);
  private moviesService = inject(MoviesService);
  private router = inject(Router);

  movie: Peli = { id: 0, name: "", year: 0, description: "", duration: "", genre: "" };
  editing = false;

  ngOnInit() {
    const id = Number(this.route.snapshot.params['id']);

    if (id) {
      this.editing = true;
      this.movie = this.moviesService.getOne(id);
    }
  }

  guardar() {
    if (this.editing) {
      this.moviesService.put(this.movie);
    } else {
      this.moviesService.save(this.movie);
    }
    this.router.navigate(['/home']);
  }
}