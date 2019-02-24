import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieDetailsRoutingModule} from './movie-details-routing.module';
import {MovieDetailsComponent} from './movie-details.component';
import {ApiService} from '../../shared/services/api.service';
import {SharedModule} from '../../shared/shared.module';
import {CarouselModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    SharedModule,
    CarouselModule.forRoot()
  ],
  providers: [ ApiService ]
})
export class MovieDetailsModule { }
