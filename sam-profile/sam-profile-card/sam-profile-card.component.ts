import { Component, OnInit, Input } from '@angular/core';
import * as html2canvas from 'html2canvas';
@Component({
  selector: 'sam-profile-card',
  templateUrl: './sam-profile-card.component.html',
  styleUrls: ['./sam-profile-card.component.css']
})
export class SamProfileCardComponent implements OnInit {

  @Input() profileCardData: Object;

  public cardData: Object;
  public regNumber: any;
  constructor() {
  }

  ngOnInit() {
    this.cardData = this.profileCardData;
    console.log(this.cardData)
  }
  public download() {
    this.downloadCard(event);
  }

  public downloadCard(event: any) {
    let timeStamp = new Date().getTime();
    let name = 'samarthya_' + this.cardData['name'] + timeStamp + '.png';
    html2canvas(document.getElementById('profilecard')).then(function (canvas) {
      console.log('called')
      let imageData = canvas.toDataURL('image/png'); // to be checked as it only allows png images
      let newData = imageData.replace(/^data:image\/png/, 'data:application/octet-stream');
      let dwld = document.getElementById('downloadpc');
      dwld.setAttribute('download', name);
      dwld.setAttribute('href', newData);
    });
  }
}

