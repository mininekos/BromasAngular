import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Broma } from '../Modelo/broma';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {

  @Input() joke!: Broma;
  @Output() eliminarBroma= new EventEmitter();
  constructor() { }

  borrarBroma(broma: Broma){
    this.eliminarBroma.emit(broma);
  }

}
