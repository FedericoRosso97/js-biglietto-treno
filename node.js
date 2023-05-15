
const userkilometers=parseInt(prompt('quanti km vuoi percorrere?')); 
let pLordo=(userkilometers*0.21)
console.log(pLordo);

let prezzo=pLordo;

const etaUtente=parseInt(prompt('quanti anni hai?'));
console.log(etaUtente);

if(etaUtente<18){
    let sconto=((20/100)*pLordo);
     prezzo=(pLordo-sconto);
     
}else if(etaUtente>65){
    let sconto=((40/100)*pLordo);
     prezzo=(pLordo-sconto);
}
document.getElementById("costo").innerHTML=prezzo.toFixed(2)+'$';






