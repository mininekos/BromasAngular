import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { JokeListComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { BorrarInsultosPipe } from './borrar-insultos.pipe';

@NgModule({
  declarations: [
    JokeListComponent,
    JokeComponent,
    JokeFormComponent,
    BorrarInsultosPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [JokeListComponent]
})
export class AppModule { }
