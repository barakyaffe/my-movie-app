import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';

const appRoutes: Route[] = [
  { path: '', redirectTo: 'popular-movies', pathMatch: 'full' },
  { path: 'popular-movies', loadChildren: './core/movie-list/movie-list.module#MovieListModule' },
  { path: 'popular-movies/:id', loadChildren: './core/movie-list/movie-list.module#MovieListModule' },
  { path: 'movie-details/:id',  loadChildren: './core/movie-details/movie-details.module#MovieDetailsModule' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
