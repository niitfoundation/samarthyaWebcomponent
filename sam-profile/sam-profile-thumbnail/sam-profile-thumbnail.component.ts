import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sam-profile-thumbnail',
  templateUrl: './sam-profile-thumbnail.component.html',
  styleUrls: ['./sam-profile-thumbnail.component.css']
})
export class SamProfileThumbnail implements OnInit {

  @Input() thumb: any;
  public image: any;

  constructor() { }

  ngOnInit() {
    this.image = './../../assets/img/' + this.thumb.gender + '.jpg';
  }
  click() {

  }
}
