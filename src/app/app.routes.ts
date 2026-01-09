import { Routes } from '@angular/router';
import { Home } from './home/home';
import { EditMovieComponent } from './edit-movie/edit-movie';

export const routes: Routes = [
 {path: '', component: Home,title: 'Home page'},
 {path: 'home', component: Home, title: 'Home page'},
 {path: 'form/:id', component: EditMovieComponent}
 ];
