import { identifierName } from "@angular/compiler";

export class Broma {

    pregunta: string;
    respuesta: string;
    oculto: boolean;
    id: Number;
    static cont: number=0;
    constructor(pregunta: string,respuesta: string){
        this.pregunta=pregunta;
        this.respuesta=respuesta;
        this.oculto=true;
        this.id=Broma.cont;
        Broma.cont++;
    }

    cambiarHidden(broma: { oculto: boolean; }) {
        broma.oculto = !broma.oculto;
    }

    getId(){
        return this.id;
    }
}
