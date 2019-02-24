import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public getPopularMovies(page: string = '1'): Observable<any> {
    return this.http.get(`${environment.base_url}/popular`, {
      params: {
        language: 'en-US',
        page: page
      }
    });
  }

  public getMovieById(id: number): Observable<any> {
    return this.http.get(`${environment.base_url}/${id}`, {
      params: {
        language: 'en-US'
      }
    });
  }

  public getImagesByMovieId(id: number): Observable<any> {
    return this.http.get(`${environment.base_url}/${id}/images`);
  }

}


