import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Broma } from "./broma";

@Injectable({
  providedIn: 'root'
})
export class ServicioPruebaService {
  
    private bromas: Broma[];
    readonly  bromas$: BehaviorSubject<Broma[]>;

    constructor(){
        this.bromas=  [
            new Broma("¿Cual es el colmo de un jardinero?", "Que le dejen plantado"),
            new Broma("¿Qué hubiera pasado si la virgen maria tuviera 3 hijos?","Que serian tri-jisus"),
            new Broma("¿Qué le dice un ojo a otro ojo?", "Estamos separados por narices"),
        ];
        this.bromas$=new BehaviorSubject<Broma[]>(this.bromas);
    }

    bromaArray(): Broma[]{
        return [...this.bromas];
    }

    bromaArray$(): Observable<Broma[]>{
        return this.bromas$.asObservable();
    }

    agregarBroma(broma:Broma){
        this.bromas.unshift(broma);
        this.bromas$.next([...this.bromas]);
    }

    eliminarBromadelArray(broma: Broma){
        this.bromas=this.bromas.filter((x)=>x.getId() !=broma.getId());
        this.bromas$.next([...this.bromas]);
    }
}
