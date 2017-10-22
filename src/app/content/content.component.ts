import {Component, OnInit, trigger, state, style, transition, animate, AfterViewInit} from '@angular/core';
import { Photo } from "../photo";
import { PhotoService } from "../photo.service";
import { Observable } from "rxjs";

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations: [
    trigger('photoState', [
      state('inactive', style({
        opacity: 0
      })),
      state('active', style({
        opacity: 1
      })),
      transition('inactive => active', animate('1500ms ease-in')),
      transition('active => inactive', animate('1500ms ease-out'))
    ])
  ]
})

export class ContentComponent implements OnInit, AfterViewInit {
  errorMessage: string;
  photos: Array<Photo> = [];
  page: number = 20;
  country: string = 'Australia';
  server: string = environment.server;

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.show();
  }

  getPhotos() {
    let that = this;

    this.photoService.getPhotos(this.country, this.page++)
        .subscribe(
            photos => {
              photos.forEach(function(value) {
                that.photos.push(new Photo(value));
              });
            },
            error => this.errorMessage = <any>error
        );
  }

  show() {
    let that = this;
    let cnt = 0;

    let photos = Observable.timer(0, 5000).subscribe(res => {
      that.getPhotos();
    });	

    Observable.timer(3000, 5000).subscribe(t => {
    	this.photos[cnt++].toggleState();

    if(cnt > 200) {
      photos.unsubscribe();
    }
    });
  }
}