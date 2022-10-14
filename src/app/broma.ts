export class Broma {

    pregunta: string;
    respuesta: string;
    oculto: boolean;

    constructor(pregunta: string,respuesta: string){
        this.pregunta=pregunta;
        this.respuesta=respuesta;
        this.oculto=true;

    }

    cambiarHidden(broma: { oculto: boolean; }) {
        broma.oculto = !broma.oculto;
      }
}
