const sum = (numOne, numTwo) => numOne + numTwo;

const mult = (numOne, numTwo) => numOne * numTwo;

const divi = (numOne, numTwo) => numOne / numTwo;

const subt = (numOne, numTwo) => numOne - numTwo;

const power = (numOne, numTwo) => Math.pow(numOne, numTwo);

const root = (numOne, numTwo) => Math.sqrt(numOne, numTwo);

function calculator(operation, numbers) {
    
    let totOperation = 0;

        totOperation = operation(...numbers);
 
        return "Il risultato: ", totOperation;

       
}

let operationChoise = prompt ('inserisci operazione: ');
let numbersChoise = prompt ('inserisci operazione: ');

const numbers = numbersChoise.split(',')
const parsedNumbers = [];


for (x of numbers) {
    if (typeof numbers[1] === 'undefined' ) {
        console.log(numbers[0]);
    
    } else if (isNaN(parseFloat(x))) {
        alert('Carattere non consentito')
        console.log('Errore')
    } else {

    parsedNumbers.push(parseFloat(x));
}
}

switch (operationChoise) {
    case "+":
    calculator(sum, parsedNumbers);
   
    break;

    case "-":
    calculator(subt, parsedNumbers);
    break;

    case "/":
    calculator(divi, parsedNumbers);
    break;

    case "*":
    calculator(mult, parsedNumbers);
    break;

    case "^":
    calculator(power, parsedNumbers);
    break;

    case "rad":
    let numTwo = 0;
    calculator(root, parsedNumbers);
    break;
}

