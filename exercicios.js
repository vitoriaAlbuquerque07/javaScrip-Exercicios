// 1. verificação de idade >>>

let idade = 19;
if (idade > 18 ) {
    console.log("você é de maior");
    
} else {
    console.log("você não é de maior");
}

//2. número negativo,positivo ou zero -->>>

let numero = -0;
if(numero > 0){
    console.log( `${numero} é positivo` );
} 
// como se fosse uma segunda condição 
else if(numero < 0){
    console.log( `${numero} é negativo` );

} 

else{
    console.log( `é zero` );
}

// 3. maior entre dois números

let maiorNumero = 21;
let menorNumero = 21;

if( maiorNumero > 21 ){
    console.log(`${maiorNumero} é maior do que ${menorNumero}`);
}
else if(  maiorNumero < 21 ){
    console.log(`${maiorNumero} é menor do que ${menorNumero}`);
}
else {
    console.log( `os números são iguais! `);
}

// 4. par ou ímpar

let mariaPontos = 7;
if( mariaPontos % 2 === 0 ){
    console.log( `é par` );
    
}
else{
    console.log(`é impar`);
}

// 5. calculo de média 

let portugues = 3.0;
let matematica = 9.0;
let ciencia = 6.0;
let media = (`${(portugues + matematica + ciencia) / 3} `);



if( media >= 7 ){
    console.log( `${media}  Aprovado ` );

} 
else if( media >= 5 || media >= 6.9  ){
    console.log( `${media}  Recuperação ` );
    
}

else {
    
    console.log( `${media}  Reprovado ` );

}


// 6. desconto em compra

let compras = 246;


if( compras > 100  ){
    let Porcentual = ((compras * 10) / 100 );
    
    console.log(`Novo Valor: ${(compras - Porcentual) }  `);

}

// 7. verificação de ano bissexto 

let ano = 2024;

if( (ano % 4 === 0 && ano % 100 !== 0 ) ||   ( ano % 400 === 0) )  {

    console.log(`${ano} é ano bissexto `);

}else{
   console.log(`${ano} não é bissexto`);
}

// 8. acesso a um sistema 

let usuario = "admin";
let senha = 1234;

if (usuario === "admin" && senha === 1234  ){
    console.log("acesso permitido")
}
else{
    console.log("Acesso negado")
}

// 9. frete gratis 

let ValorCompras = 90;
let valorPorcento = (`${(ValorCompras * 10) / 100 }`);
let frete = 20;

if(ValorCompras >= 100 ){
console.log(` novo valor : ${ValorCompras - valorPorcento}`);
}
else{
    console.log(`valor com frete: ${ValorCompras + frete}`);
}

// 10. número dentro de um intervalo
let intervalo = 80
if(intervalo >=10 && intervalo <=50 ){
    console.log("esta no intervalo")
}
else{
    console.log("fora do intervalo")
}