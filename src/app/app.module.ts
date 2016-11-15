import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { SearchPageComponent } from './search-page.component';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
