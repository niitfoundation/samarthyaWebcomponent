import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sam-profile-thumbnail',
  templateUrl: './sam-profile-thumbnail.component.html',
  styleUrls: ['./sam-profile-thumbnail.component.css']
})
export class SamProfileThumbnail implements OnInit {
  public userName = 'Divesh Snakhla';
  public imgSrc = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWBbf7xKVbM2LaMvUkL-bxgz1pvVUMB_4KwDSrJ5Ez1J9xnxGJ';
  public profession = 'Full Stack Developer';
  public role = 'Manager';
  public experience = '5yrs'
  constructor() { }

  ngOnInit() {
  }
  click() {
    console.log('hjd')
  }
}
