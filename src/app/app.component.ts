import { Component } from '@angular/core';
import { Broma } from './Modelo/broma';
import { Servicio } from './Modelo/servicio';

@Component({
  selector: 'joke-list',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class JokeListComponent {

  servicio: Servicio;
  constructor() {
    this.servicio=new Servicio;
  }
  
  obtenerArray(){
    return this.servicio.bromaArray();
  }
  agregarBroma(broma: Broma){
    this.servicio.agregarBroma(broma);
  }

  eliminarBroma(broma: Broma){
    this.servicio.eliminarBromadelArray(broma);
  }
}
