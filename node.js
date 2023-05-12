
const userkilometers=parseInt(prompt('quanti km vuoi percorrere?')); 
let pLordo=(userkilometers*0.21)
console.log(pLordo);

const etaUtente=parseInt(prompt('quanti anni hai?'));
console.log(etaUtente);

document.getElementById('prezzo').innerHTML=pLordo;
if(etaUtente<18){
    let sconto=((20/100)*pLordo);
    let prezzoDec=(pLordo-sconto);
    let prezzo=prezzoDec.toFixed(2);
    document.getElementById('prezzo').innerHTML=prezzo;
}else if(etaUtente>65){
    let sconto=((40/100)*pLordo);
    let prezzoDec=(pLordo-sconto);
    let prezzo=prezzoDec.toFixed(2);
    document.getElementById('prezzo').innerHTML=prezzo;
}




