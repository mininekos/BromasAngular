import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Broma } from '../broma';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {

  @Input() joke!: Broma;
  //@Output() eliminarBroma: new EventEmitter();
  constructor() { }

  

}
