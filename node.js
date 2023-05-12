
const userkilometers=parseInt(prompt('quanti km vuoi percorrere?')); 
let pLordo=(userkilometers*0.21)
console.log(pLordo);

let prezzo=pLordo;
const etaUtente=parseInt(prompt('quanti anni hai?'));
console.log(etaUtente);
if(etaUtente<18){
    let sconto=((20/100)*pLordo);
    let prezzoDec=(pLordo-sconto);
    let prezzo=prezzoDec.toFixed(2);
}else if(etaUtente>65){
    let sconto=((40/100)*pLordo);
    let prezzoDec=(pLordo-sconto);
    let prezzo=prezzoDec.toFixed(2);
}else{
    let prezzo=pLordo;
}
document.getElementById("costo").innerHTML=prezzo;






