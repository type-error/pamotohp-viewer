import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Photo } from "./photo";
import {Observable} from "rxjs";

@Injectable()
export class PhotoService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'http://localhost:8080/photo/country/Australia/4';  // URL to web api

  constructor(private http: Http) { }

  getPhotos(): Observable<Photo[]> {
    return this.http.get(this.url)
        .map(response => response.json() as Photo[] )
        .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
