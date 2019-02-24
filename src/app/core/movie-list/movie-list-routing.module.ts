import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {MovieListComponent} from './movie-list.component';

const movieListRoutes: Route[] = [
  { path: '', component: MovieListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(movieListRoutes)
  ]
})
export class MovieListRoutingModule { }
