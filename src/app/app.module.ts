import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { JokeListComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokeFormComponent } from './joke-form/joke-form.component';

@NgModule({
  declarations: [
    JokeListComponent,
    JokeComponent,
    JokeFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [JokeListComponent]
})
export class AppModule { }
