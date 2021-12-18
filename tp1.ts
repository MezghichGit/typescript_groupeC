// STEP 1 : Compilation + exécution

//STEP 2 : Différence entre let et var


// STEP 3 : Cast explicite (autocompletion)

// STEP 4 : Arrow function 

// STEP 5 : Les interfaces

// STEP 6 : Les classes : constructeur, new operator...

// STEP 7 : export et import

import {Point, CompteBancaire} from "./entities";
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


function infoSolde(cb : CompteBancaire){
    console.log("Nom = "+cb.nom + " Solde = "+ cb.solde);
}

infoSolde(
    {
        "nom":"Jean",
        "solde":500
    }
);



let point1 : Point = new Point();
point1.draw();
let point2 : Point = new Point(10,20);
point2.draw();