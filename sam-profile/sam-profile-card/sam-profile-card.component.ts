import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from './profile-card-data-service';
@Component({
  selector: 'sam-profile-card',
  templateUrl: './sam-profile-card.component.html',
  styleUrls: ['./sam-profile-card.component.css']
})
export class SamProfileCardComponent implements OnInit {

  @Input() profileCardData: Object;

  public cardData: Object;

  constructor() {
    // this.cardData = "DHER";
    // this.cardData = this.ProfileService.getCardData();
  }
  ngOnInit() {
    this.cardData = this.profileCardData;

    console.log(this.profileCardData);

  }
}

