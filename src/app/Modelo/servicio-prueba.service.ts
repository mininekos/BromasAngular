import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Broma } from "./broma";

@Injectable({
  providedIn: 'root'
})
export class ServicioPruebaService {
  
    private bromas: Broma[];
    private _bromas = new BehaviorSubject<Broma[]>([]);
    readonly  bromas$=this._bromas.asObservable();

    constructor(){
        this.bromas=  [
            new Broma("¿Cual es el colmo de un jardinero?", "Que le dejen plantado"),
            new Broma("¿Qué hubiera pasado si la virgen maria tuviera 3 hijos?","Que serian tri-jisus"),
            new Broma("¿Qué le dice un ojo a otro ojo?", "Estamos separados por narices"),
        ];
    }

    bromaArray(): Broma[]{
        return this.bromas;
    }

    agregarBroma(broma:Broma){
        this.bromas.unshift(broma);
        this._bromas.next(Object.assign([], this.bromas))
    }

    eliminarBromadelArray(broma: Broma){
        this.bromas=this.bromas.filter((x)=>x.getId() !=broma.getId());
        this._bromas.next(Object.assign([], this.bromas));
    }
}
