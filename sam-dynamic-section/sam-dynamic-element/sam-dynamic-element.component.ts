import { SamDynamicElementBase } from './sam-dynamic-element-base';
import { Component, OnInit, Input } from '@angular/core';
import { Md2Dialog } from 'md2'

@Component({
  selector: 'sam-dynamic-element',
  templateUrl: './sam-dynamic-element.component.html',
  styleUrls: ['./sam-dynamic-element.component.css'],
  providers: [Md2Dialog]
})
export class SamDynamicElementComponent implements OnInit {

  @Input() element: SamDynamicElementBase<any>;

  constructor(public dialog: Md2Dialog) { }

  public formData: any;

  ngOnInit() { }

  onEdit(dialog: Md2Dialog, cardData: any) {
    console.log(cardData);
    dialog.open();
  }
}
