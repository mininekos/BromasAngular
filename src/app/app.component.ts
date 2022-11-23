import { Component } from '@angular/core';
import { Broma } from './Modelo/broma';
import { Servicio } from './Modelo/servicio';
import { ServicioPruebaService } from './Modelo/servicio-prueba.service';

@Component({
  selector: 'joke-list',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class JokeListComponent {

  
  constructor(private servicio: ServicioPruebaService) {
    
  }
  
  obtenerArray(){
    return this.servicio.bromaArray();
  }/*
  agregarBroma(broma: Broma){
    this.servicio.agregarBroma(broma);
  }

  eliminarBroma(broma: Broma){
    this.servicio.eliminarBromadelArray(broma);
  }*/
}
