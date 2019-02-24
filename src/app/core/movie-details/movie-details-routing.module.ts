import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {MovieDetailsComponent} from './movie-details.component';

const movieDetailsRoutes: Route[] = [
  { path: '', component: MovieDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(movieDetailsRoutes)
  ]
})
export class MovieDetailsRoutingModule { }
