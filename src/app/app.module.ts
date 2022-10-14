import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { JokeListComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';

@NgModule({
  declarations: [
    JokeListComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [JokeListComponent]
})
export class AppModule { }
