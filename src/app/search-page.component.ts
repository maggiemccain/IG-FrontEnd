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
    this.submitted = true;
    console.log(candidate);
  };

  model = new Candidate('ted', 'johnson');

  ranges = ['0-1', '2-3', '4-5'];

  // first: string = 'Maggie';

// angular doesn't appear to recognize .hide() as afunction for HTMLelements
  toggle() {
   var e = document.getElementById('toggleDiv');
   var b = document.getElementById('toggleButton');
   if(e.style.display == 'block') {
      e.style.display = 'none';
      b.textContent = 'SHOW';
  }
   else{
      e.style.display = 'block';
      b.textContent = 'HIDE ^';
    }
    }
}
