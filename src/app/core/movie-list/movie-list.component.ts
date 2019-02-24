import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {BehaviorSubject, Subject} from 'rxjs';
import {filter, take, takeUntil} from 'rxjs/internal/operators';
import {movies} from '../../shared/interfaces/movie.interface';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {

  public movies: movies = [];
  public page: number;
  public total_pages: number;
  public total_results: number;

  private compDestroy$ = new Subject();
  private pageChange$ = new BehaviorSubject(1);

  constructor(private apiService: ApiService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.pageChange$
      .pipe(
        takeUntil(this.compDestroy$),
      )
      .subscribe(this.getNextPage.bind(this));

    this.route.params
      .subscribe(params => {
        this.page = params['id'];
        this.pageChange$.next(params['id']);
      });
  }

  setMovies(data): void {
    this.movies = data.results;
    this.page = data['page'];
    this.total_pages = data['total_pages'];
    this.total_results = data['total_results'];
  }

  pageChanged(e) {
    this.router.navigate(['popular-movies', e.page]);
  }

  getNextPage(page) {
    this.apiService.getPopularMovies(page)
      .pipe(
        // Subscribes once
        take(1),
        filter(res => !!res),
      )
      .subscribe(this.setMovies.bind(this));
  }

  ngOnDestroy() {
    this.compDestroy$.next();
    this.compDestroy$.unsubscribe();
  }

}
