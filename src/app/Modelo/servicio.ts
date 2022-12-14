import { Broma } from "./broma";

export class Servicio {

    private bromas: Broma[];
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
    }

    eliminarBromadelArray(broma: Broma){
        this.bromas=this.bromas.filter((x)=>x.getId() !=broma.getId());
    }
}
