import { Broma } from "./broma";

export class Servicio {

    private bromas: Broma[];
    constructor(){
        this.bromas=  [
            new Broma("What did the cheese say when it looked in the mirror?", "Hellome (Halloumi)"),
            new Broma("What kind of cheese do you use to disguise a small horse?","Mask-a-pony (Mascarpone)"),
            new Broma("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
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
