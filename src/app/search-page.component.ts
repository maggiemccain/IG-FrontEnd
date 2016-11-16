import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from './modal.component';
import { Candidate } from './candidate';

@Component({
  selector: 'app-search-page',

  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})

export class SearchPageComponent implements OnInit {

  constructor() { };

  @ViewChild(ModalComponent)
 private modalComponent: ModalComponent;

  ngOnInit() {
  };

  submitted = false;

  onSubmit(candidate) {
    // this.submitted = true;
    console.log(candidate);
    // ModalComponent.show();
  };

  // model = new Candidate(1, 'ted', 'johnson');

  ranges = ['0-1', '2-3', '4-5'];

  // get diagnostic() { return JSON.stringify(this.model)};

}
