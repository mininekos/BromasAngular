import { Component, EventEmitter, Output } from '@angular/core';
import { Broma } from '../broma';

@Component({
  selector: 'joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent  {

  //@Output() mandarBroma!: new EventEmitter<Broma>();
  constructor() { }

  crearBroma(pregunta: string, respuesta:string){
    //this.mandarBroma.emit(new Broma(pregunta,respuesta));
  }

}
