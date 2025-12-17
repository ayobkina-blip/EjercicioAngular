import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroItem } from './components/hero-item/hero-item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroItem],
  template: "<app-hero-item/>",
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('AngularProyecto');
}
