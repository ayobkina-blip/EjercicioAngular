import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

/*
  Se dibujan 5 estrellas. cada estrella ocupa 80 pixels en horizontal
  Se muestra un div y otro dentro con 5 estrellas 
  Al cambiar el tamaÃ±o del div padre, solo se ven las estrellas que se pueden !! 

*/


@Component({
  selector: 'app-star',
  templateUrl: './star.html',
  standalone: true,
  styleUrls: ['./star.css']
})
export class StarComponent implements OnChanges {
  @Input() rating = 0; 
  @Input() id:any; 

  starWidth = 0; // Cantidad de pixels en horizontal

  @Output() ratingClicked: EventEmitter<string> =   new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 80 / 5;
  }

  onClick(): void {
    //this.ratingClicked.emit(`Se envia: ${this.rating}-${this.id}`);
    this.ratingClicked.emit(`${this.id}`);
  }

}