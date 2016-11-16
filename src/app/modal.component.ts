import { Component, Directive, ViewChild, AfterViewInit } from '@angular/core';
import { ModalModule } from 'ng2-bootstrap/components/modal';
// import {CORE_DIRECTIVES} from '@angular/common';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})

export class ModalComponent {
  // lgModal is a local variable linked to bs-modal directive

  // @ViewChild('childModal') public childModal:ModalDirective;
  //
  // public showChildModal():void {
  //   this.childModal.show();
  // }
  //
  // public hideChildModal():void {
  //   this.childModal.hide();


  // }
}



// import {MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
// import {Component, ViewChild, ElementRef} from "@angular/core";
// import { ModalModule } from 'ng2-bootstrap/components/modal';
// import {CORE_DIRECTIVES} from '@angular/common';
//
// @Component({
//     selector: 'app-modal',
//     moduleId: module.id,
//     templateUrl: './modal.component.html',
//     styleUrls: ['./modal.component.css'],
//     directives: [MODAL_DIRECTVES],
//     viewProviders: [BS_VIEW_PROVIDERS]
// })
//
// export class ModalComponent {
//     modalBody:string;
//     @ViewChild('lgModal') modal:ElementRef;
//
//     showModal(modalBody:string) {
//         if (modalBody != undefined) {
//             this.modalBody = modalBody;
//             this.modal.show();
//         }
//     }
// }







// @Directive({
//   selector: '[bsModal]',
//   exportAs: 'bs-modal'
// })
// export class ModalDirective implements AfterViewInit, OnDestroy {
//   @Input()
//   public set config(conf:ModalOptions) {
//     this._config = this.getConfig(conf);
//   };
//
//   @Output() public onShow:EventEmitter<ModalDirective> = new EventEmitter();
//   @Output() public onShown:EventEmitter<ModalDirective> = new EventEmitter();
//   @Output() public onHide:EventEmitter<ModalDirective> = new EventEmitter();
//   @Output() public onHidden:EventEmitter<ModalDirective> = new EventEmitter();
//
// }
