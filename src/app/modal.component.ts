import { Component, Input, Directive, ViewChild, AfterViewInit } from '@angular/core';
import { ModalModule } from 'ng2-bootstrap/components/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  @ViewChild('childModal') public childModal:any;

  public showChildModal():void {
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }

  @Input('first') firstName:string;
  @Input('last') lastName:string;
  @Input('email') email:string;
  @Input('keywords') keywords: string;
  @Input('phone') phone:string;
  @Input('city') city:string;
  @Input('state') state:string;
  @Input('range') range:string;


}
