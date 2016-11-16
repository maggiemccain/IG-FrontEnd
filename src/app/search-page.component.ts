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
    // new Candidate(candidate.firstName, candidate.lastName)
  };

  model = new Candidate('ted', 'johnson');

  ranges = ['0-1', '2-3', '4-5'];

  // first: string = 'Maggie';

// angular doesn't appear to recognize .hide() as afunction for HTMLelements
  onHide(){
    var searchDiv = document.getElementById('show');
    var toggleButton = document.getElementById("toggleButton");
    console.log('button pressed')
    if  (searchDiv.style.display = 'block') {
      searchDiv.style.display = 'none';
      toggleButton.innerHTML = "Show";
    }
    else {
      searchDiv.style.display = 'block';
      toggleButton.innerHTML = "Hide";
    }
  }
      // document.getElementById('show').style.display = 'none';};
  // get diagnostic() { return JSON.stringify(this.model)};

}
