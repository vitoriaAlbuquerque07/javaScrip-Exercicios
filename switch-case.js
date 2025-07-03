// 1. Dias da semana 

let dias = "9";

switch ( dias){
case "1":
    console.log("Domingo");
    break;
    case "2":
        console.log("segunda");
        break;
        case "3":
            console.log("terça");
            break;
            case "4":
                console.log("quarta");
                break;
                case "5":
                    console.log("quinta");
                    break;
                    case "6":
                        console.log("sexta");
                        break;
                        case "7":
                            console.log("é sabado");

 default :
 console.log("Dias não encontrado!");
}

// 2. nota por conceito 

let nota = "D" ;
switch(nota){
    case "A":
        console.log("Ótimo!");
        break;
     case "B":
    console.log("Bom!");
          break;
          case "C":
            console.log("Regular!");
            break;
              case "D":
                console.log("Ruim!");
                break;
                   case "E":
                    console.log("Reprovado!");
                    break;

                    default:
                        console.log("isso não corresponde!")
}

// 3. Calculadora simples

// let Numero1 = Number(prompt("digite um número:"));
// let Numero2 = Number(prompt("digite um número:"))
// let operacao = prompt("digite uma operação (*,+,-,/):")

let Numero1 = "55";
let Numero2 = "10";
let operacao = "-";

switch (operacao){
    case "+":
    console.log(`${Numero1 + Numero2} `);
    break;

     case "-":
    console.log(`${Numero1 - Numero2} `);
    break;

    case "*":
    console.log(`${Numero1 * Numero2} `);
    break;
     
    case "/":
    console.log(`${Numero1 /  Numero2} `);
    break;
}
// mesese ano
let meses = "12";
switch(meses) {
        case "1":
        console.log("Janeiro");
        break;
         case "2":
        console.log("Fevereiro");
        break;
         case "3":
        console.log("Março");
        break;
         case "4":
        console.log("Abril");
        break;
         case "5":
        console.log("Maio");
        break;
         case "6":
        console.log("Junior");
        break;
         case "7":
        console.log("Julho");
        break;
         case "8":
        console.log("Agosto");
        break;
         case "9":
        console.log("Setembro");
        break;
         case "10":
        console.log("Outubro");
        break;
         case "11":
        console.log("Novembro");
        break;
         case "12":
        console.log("Dezembro");
        break;
}

// classificação de filme 

let classificaçãoEtaria = "10"
switch (classificaçãoEtaria){
    case "L":
    console.log("Livre, qual quer um pode acessar!");
    break;
       case "10":
    console.log("penas para 10 anos!");
    break;
       case "12":
    console.log("apenas a partir de 12 anos!");
    break;
       case "14":
    console.log("a partir de 14 anos!");
    break;
       case "16":
    console.log("apenas para maiores de 16 anos!");
    break;
       case "18":
    console.log("apenas para maiores de 18 anos!");
    break;
    
   
}
// menu de restaurante

let NumeroMenu = "1"
console.log("cardapio : 1-merenda 2-almoço 3-janta")

switch (NumeroMenu){
    case "1":
        console.log(" voce escolheu merenda");
        break;
        case "2":
            console.log(" voce escolheu almoço");
            break;
            case "3":
                console.log(" voce escolheu o jantar ");
                break;
                default:
                    console.log("não corresponde ao cardapio");
}

// conversor de unidades 
let escala = "celsius"; // Você define a escala
let celsius = 25;
let kelvin;

switch (escala) {
  case "celsius":
    kelvin = celsius + 273.15;
    console.log(`A temperatura de ${celsius}°C em Kelvin é: ${kelvin}K`);
    break;

  default:
    console.log("Escala não reconhecida.");
}
// para arrendondar usar .toFixed()