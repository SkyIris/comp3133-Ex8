import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {RemoveSpacesPipe} from './remove-spaces.pipe';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesComponent,
    AppComponent,
    RemoveSpacesPipe
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }