// STEP 1 : Compilation + exécution
//STEP 2 : Différence entre let et var
// STEP 3 : Cast explicite (autocompletion)
// STEP 4 : Arrow function 
// STEP 5 : Les interfaces
// STEP 6 : Les classes : constructeur, new operator...
/*
console.log("Hello Typescript");
function info(){
    for(let i = 0; i<10; i++)  // var i : i variable gloable
    {
        console.log("i= "+i);
    }

    console.log("En dehors de la boucle...");
    // console.log("i= "+i);
}


info();*/
/*
let nom:any;
nom = "amine";

console.log((<string>nom).toUpperCase());*/
/*let som = function(a:number, b :number){
    return a+b;
}
*/
//let som = (a,b)=>a+b;  // arrow function version réduite
/*
let som = (a:number, b:number) =>{ return a+b;};
console.log(som(30,20));*/
/*
interface CompteBancaire{
    nom : string,
    solde : number
}

function infoSolde(cb : CompteBancaire){
    console.log("Nom = "+cb.nom + " Solde = "+ cb.solde);
}

infoSolde(
    {
        "nom":"Jean",
        "solde":500
    }
);
*/
var Point = /** @class */ (function () {
    //private x : number;
    //private y : number;
    // on déclare les attributs d'instance au niveau constructeur
    function Point(x, y) {
        this.x = x;
        this.y = y;
        //this.x = a;
        //this.y = b;
        console.log("Constructeur...");
    }
    Point.prototype.draw = function () {
        console.log("x = " + this.x + " y = " + this.y);
    };
    return Point;
}());
var point1 = new Point();
point1.draw();
var point2 = new Point(10, 20);
point2.draw();
