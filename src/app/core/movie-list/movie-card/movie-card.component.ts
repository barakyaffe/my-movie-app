import {Component, Input} from '@angular/core';
import {IMovie} from '../../../shared/interfaces/movie.interface';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie: IMovie;
}

