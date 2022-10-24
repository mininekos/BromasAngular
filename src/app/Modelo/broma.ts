import { identifierName } from "@angular/compiler";

export class Broma {

    private pregunta: string;
    private respuesta: string;
    private oculto: boolean;
    private id: Number;
    private static cont: number=0;

    constructor(pregunta: string,respuesta: string){
        this.pregunta=pregunta;
        this.respuesta=respuesta;
        this.oculto=true;
        this.id=Broma.cont;
        Broma.cont++;
    }

    cambiarHidden(broma: Broma) {
        broma.oculto = !broma.oculto;
    }

    getPregunta(): String{
        return this.pregunta;
    }

    getRespuesta(): String{
        return this.respuesta;
    }

    getOculto(): Boolean{
        return this.oculto;
    }

    getId(): Number{
        return this.id;
    }

    
}
