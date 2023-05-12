
const userkilometers=parseInt(prompt('quanti km vuoi percorrere?')); 
let pLordo=(userkilometers*0.21)
console.log(pLordo);

const etaUtente=parseInt(prompt('quanti anni hai?'));
console.log(etaUtente);

if(etaUtente<18){
    let prezzo=((20/100)*pLordo);
    document.getElementById('prezzo').innerHTML=prezzo;
}




