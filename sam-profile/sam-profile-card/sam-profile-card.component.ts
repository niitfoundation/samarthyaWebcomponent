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

  constructor() {
  }

  ngOnInit() {
    this.cardData = this.profileCardData;
    // console.log(this.cardData);
  }
  public download(event: any) {
    console.log('asdasd');
    var timeStamp = new Date().getTime();
    console.log(timeStamp);
    console.log(event)
    var name = "samarthya_" + this.cardData['name'] + timeStamp + ".png";
    html2canvas(document.getElementById("profilecard")).then(function (canvas) {
      console.log('called')
      var imageData = canvas.toDataURL("image/png");
      var newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
      var dwld = document.getElementById("downloadpc");
      dwld.setAttribute("download", name);
      dwld.setAttribute("href", newData);
    });
  }
}

