import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Photo } from "./photo";
import { Observable } from "rxjs";

import { environment } from '../environments/environment';

@Injectable()
export class PhotoService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private url = environment.server + '/photo';

  constructor(private http: Http) { }

  getPhotos(country: string, page: number): Observable<Photo[]> {
    let _url = this.url + `/country/${country}/${page}`;

    return this.http.get(_url)
        .map(response => response.json() as Photo[] )
        .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
