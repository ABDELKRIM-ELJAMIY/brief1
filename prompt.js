const prompt = require("prompt-sync")();

class Calculator {
    validateInput(input) {
        return !isNaN(input) && input.trim() !== "";
    }
    add(num1, num2) {
        return (num1 + num2);
    }

    subtract(num1, num2) {
        return (num1 - num2);
    }

    multiply(num1, num2) {
        return (num1 * num2);
    }

    dev(num1, num2) {
        if (num2 === 0) {
            console.log("La division par zéro n'est pas autorisée"); 
            return undefined;
        } else { 
            return (num1 / num2);
        }
    }

    puissance(num1, num2) {
        return num1 ** num2;
    }

    sqrt(num) {
        return Math.sqrt(num);
    }

    factorielle(num) {
        if (num < 0) {
            return "Le nombre doit être positif ou nul!!!!!";
        }
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }
}

const calc = new Calculator();
let choix;
do {
    console.log("Menu des choix:");
    console.log("1: pour Addition (+)");
    console.log("2: pour Soustraction (-)");
    console.log("3: pour Multiplication (*)");
    console.log("4: pour Division (/)");
    console.log("5: pour Puissance");
    console.log("6: pour Racine carrée");
    console.log("7: pour Factorielle");
    console.log("8: pour sortie");

    choix = prompt("Le choix: ").trim();
    let n1, n2, result;
    if (choix === '6') {
        while (true) {
            n1 = prompt("Entrez un nombre: ").trim();
            if (calc.validateInput(n1)) break; 
            console.log("Entrée invalide, veuillez entrer un nombre valide.");
        }
        n1 = +n1;
    }
    else if (choix === '7') {
        while (true) {
            n1 = prompt("Entrez un nombre pour calculer la factorielle:").trim();
            if (calc.validateInput(n1)) break; 
            console.log("Entrée invalide, veuillez entrer un nombre valide.");
        }
    }
    else if (choix >= '1' && choix <= '5') { 
        while (true) {
            n1 = prompt("Entrez le premier nombre: ").trim();
            if (calc.validateInput(n1)) break;
            console.log("Entrée invalide, veuillez entrer un nombre valide.");
        }
        n1 = +n1;

        while (true) {
            n2 = prompt("Entrez le deuxième nombre: ").trim();
            if (calc.validateInput(n2)) break;
            console.log("Entrée invalide, veuillez entrer un nombre valide.");
        }
        n2 = +n2;
    }
    switch (choix){
        case `1`:
            result = calc.add(n1, n2);
            console.log("Résultat: " + result);
            break;

        case `2`:
            result = calc.subtract(n1, n2);
            console.log("Résultat: " + result);
            break;

        case `3`:
            result = calc.multiply(n1, n2);
            console.log("Résultat: " + result);
            break;

        case `4`:
            result = calc.dev(n1, n2);
            console.log("Résultat: " + result);
            break;

        case `5`:
            result = calc.puissance(n1, n2);
            console.log("Résultat: " + result);
            break;
        case `6`:
            result = calc.sqrt(n1);
            console.log("Résultat: " + result);
            break;

        case `7`:
            result = calc.factorielle(n1);
            console.log("Résultat: " + result);
            break;
            case`8`:
            break;
        default:
            console.log("Erreur");
}
} 
while (choix !== '8');