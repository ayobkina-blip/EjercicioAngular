import { Component } from '@angular/core';
import { Home } from './home/home';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrl: 'app.css',
})
export class App {

}
