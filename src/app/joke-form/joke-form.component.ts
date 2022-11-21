import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Broma } from '../Modelo/broma';

@Component({
  selector: 'joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent  {
  
  formulario!: FormGroup;
  preguntaForm!: FormControl;
  respuestaForm!: FormControl;
  
  @Output() mandarBroma = new EventEmitter<Broma>();
  constructor() { }
  
  crearBroma(pregunta: HTMLInputElement, respuesta:HTMLInputElement){
    if(pregunta.value!="" && respuesta.value!=""){
      this.mandarBroma.emit(new Broma(pregunta.value,respuesta.value));
      pregunta.value="";
      respuesta.value="";
    }
  }

  ngOnInit(){
    this.crearComponentesFormulario();
    this.crearFormuralrio();
  }

  crearComponentesFormulario() {
    this.preguntaForm=new FormControl('',[Validators.required,Validators.minLength(5)]);
    this.respuestaForm=new FormControl('',Validators.required);
  }

  crearFormuralrio() {
    this.formulario=new FormGroup({
      preguntaForm: this.preguntaForm,
      respuestaForm: this.respuestaForm,
    });
  }
  

}
