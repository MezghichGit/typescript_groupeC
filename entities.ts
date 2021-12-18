export class Point{
    //private x : number;
    //private y : number;

    // on déclare les attributs d'instance au niveau constructeur
    public constructor(private x? : number, private y? : number){  // surcharge de constructeurs
        //this.x = a;
        //this.y = b;
        console.log("Constructeur...");
    }

   
    public draw(){
        console.log("x = "+this.x +" y = "+this.y);
    }
}

export interface CompteBancaire{
    nom : string, 
    solde : number
}
