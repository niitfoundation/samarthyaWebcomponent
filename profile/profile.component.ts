import { SamDynaElementComponent } from './../sam-dyna-component/sam-dyna-element/sam-dyna-element.component';
import { SamDynaElementBase } from './../sam-dyna-component/sam-dyna-element-base';
import { SamDynaViewComponent } from './../sam-dyna-component/sam-dyna-view/sam-dyna-view.component';
import { SamDynaElementService } from './../sam-dyna-component/sam-dyna-element-service';
import { Component, OnInit,Input } from '@angular/core';
 


@Component({
  selector: 'app-profile',
 template : `<h3>profile component is here</h3>`
          
})
export class ProfileComponent  implements OnInit   {
  

  ngOnInit() {
  }

}
