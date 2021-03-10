import { Injectable } from '@angular/core';
import { Album } from './album';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private albumsUrl = 'api/albums';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(  private http: HttpClient
  ) { }
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl)
      .pipe(
        catchError(this.handleError<Album[]>('getHeroes', []))
      );
  }
  getAlbum(id: number): Observable<Album> {
    const url = `${this.albumsUrl}/${id}`;
    return this.http.get<Album>(url).pipe(
      catchError(this.handleError<Album>(`getAlbum id=${id}`))
    );
  }
  /** PUT: update the hero on the server */
  updateAlbum(album: Album): Observable<any> {
    return this.http.put(this.albumsUrl, album, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateAlbum'))
    );
  }
  /** DELETE: delete the hero from the server */
  deleteHero(album: Album | number): Observable<Album> {
    const id = typeof album === 'number' ? album : album.id;
    const url = `${this.albumsUrl}/${id}`;

    return this.http.delete<Album>(url, this.httpOptions).pipe(
      catchError(this.handleError<Album>('deleteAlbum'))
    );
  }
  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
