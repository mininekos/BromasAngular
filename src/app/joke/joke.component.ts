import { Component, Input, OnInit } from '@angular/core';
import { Broma } from '../broma';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {

  @Input() joke!: Broma;
  constructor() { }

  

}
