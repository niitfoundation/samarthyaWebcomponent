import { Component, OnInit, Input } from '@angular/core';
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
  }
}

