import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {forkJoin, of, Subject} from 'rxjs';
import {IMovie} from '../../shared/interfaces/movie.interface';
import {ApiService} from '../../shared/services/api.service';
import {filter, switchMap, takeUntil} from 'rxjs/internal/operators';
import {backdrops} from '../../shared/interfaces/backdrop.interface';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  private compDestroy$ = new Subject();
  public movie: IMovie;
  public backdrops: backdrops;

  constructor(private route: ActivatedRoute,
              private apiService: ApiService) {
  }

  ngOnInit() {

    const movieId = this.route.snapshot.params['id'];

    forkJoin([
      this.apiService.getMovieById(movieId),
      this.apiService.getImagesByMovieId(movieId),
    ])
      .pipe(
        takeUntil(this.compDestroy$),
        filter(res => !!res),
        switchMap(res => {
          return of({movie: res[0], images: res[1]});
        })
      )
      .subscribe(res => {
        this.movie = res.movie;
        this.backdrops = res.images.backdrops;
      });
  }

  ngOnDestroy() {
    this.compDestroy$.next();
    this.compDestroy$.unsubscribe();
  }
}
