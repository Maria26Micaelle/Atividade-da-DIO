function comparaNumeros(num1, num2) {
    const primeirafrase = criaPrimeirafrase(num1, num2);
    const segundafrase = criaSegundafrase(num1, num2);
    return '${primeirafrase} ${segundafrase}'
}

function criaPrimeirafrase(num1, num2){
    let saoIguais = '';

    if(num1 !== num2) {
        saoIguais = 'não';
    }

return 'os numeros ${num1} e ${num2} ${saoIguais} sao iaguais.'
}


function criaSegundafrase(num1, num2);
 const soma = num1 + num2;

 let resultado10 = 'menor';
 let resultado20 = 'menor';
 const compara10 = soma > 10;
 const comprara20 = soma > 20;

 if(compara10) {
     resultado10 = 'maior'
 }
if(comprara20) {
    resultado20 = 'maior';
}

return 'sua soma é ${soma, que é ${resultado} que 10 e $ 
{resultado} que 20'



