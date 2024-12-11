const prompt = require("prompt-sync")();

function add(num1, num2) {
    return (num1 + num2);
}

function moin(num1, num2) {
    return (num1 - num2);
}

function mult(num1, num2) {
    return (num1 * num2);
}
function dev(num1, num2){
    if(num1>0)
    return(num1/num2)
else
console.log("Le premier numero doit être supérieur à 0")
}

while (true) {
    const num1 = prompt("entrer le premier numero:");
    const operation = prompt("l operation:").trim();
    const num2 = prompt("entrer le deuxième numero:");
    const n1 = +num1;
    const n2 = +num2;
    let result;

    switch (operation) {
        case `+`:
            result = add(n1, n2);
            console.log("Résultat: " + result);
            break;
        case `-`:
            result = moin(n1, n2);
            console.log("Résultat: " + result);
            break;
        case `*`:
            result = mult(n1, n2);
            console.log("Résultat: " + result);
            break;
        case `/`:
            result = dev(n1, n2);
            console.log("Résultat: " + result);
            break;
            
            case `/`:
            result = dev(n1, n2);
            console.log("Résultat: " + result);
            break;

        default:
            console.log("erreur");
            break;
    }

    const continuer = prompt("voulez vous continuer y/n ?:")
    if (continuer() !== `y`) {
        break;
    }
}

