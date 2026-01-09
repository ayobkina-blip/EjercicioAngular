import { Injectable } from '@angular/core';
import { Peli} from './interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 
  protected Movies: Peli[] = [
     {id: 1, name: "Lo que el viento se llevo",year:1900, description: "Un rollo de ", duration:"" ,genre: "acción"},
     {id: 2, name: "Solo en casa"             ,year:1900, description: "Un rollo de ", duration:"" ,genre: "comedia"}
    ];

  getAllMovies(): Peli[] {
    return this.Movies;
  }

  getOne(id:number):Peli{
    for (var i=0;i<this.Movies.length;i++)
      if (this.Movies[i].id == id)
        return this.Movies[i]
    
    return this.Movies[i]
  }
  
  getOne2(id: number): Peli | undefined {
    return this.Movies.find(peli => peli.id === id);
  }


  delete(id:number){    
    for (var i=0;i<this.Movies.length;i++)
      if (this.Movies[i].id == id)
          this.Movies.splice(i,1);
  }

  save(movie: Peli) {    
    this.Movies.push(movie); 
  }

  put(movie: Peli) {
    for (var i=0;i<this.Movies.length;i++)
      if (this.Movies[i].id == movie.id)
          this.Movies[i]=movie;
  }

}


