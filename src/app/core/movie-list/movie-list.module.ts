import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieListRoutingModule} from './movie-list-routing.module';
import {MovieListComponent} from './movie-list.component';
import {ApiService} from '../../shared/services/api.service';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {PaginationModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MovieListComponent,
    ContentHeaderComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MovieListRoutingModule,
    RouterModule,
    SharedModule,
    PaginationModule.forRoot()
  ],
  providers: [ ApiService ]
})
export class MovieListModule { }
