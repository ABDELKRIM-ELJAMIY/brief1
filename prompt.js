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
function Puissance(num1,num2){
    return num1 ** num2 ;
    }
    function racineCarree(num) {
        return Math.sqrt(num);
    }
    function Factorielle(num){
        if (num<0){
            return "Le nombre doit être positif ou nul!!!!!";
        }
let result = 1 ;
for(let i=1;i<=num;i++){
    result *=i;
}    
return result;
}
while (true) {
    console.log("choiser un operation:")
    console.log("1:pour Addition (+)")
    console.log("2:pour Soustraction (-)");
    console.log("3:pour Multiplication (*)");
    console.log("4:pour Division (/)");
    console.log("5:pour Puissance");
    console.log("6:pour Racine carrée");
    console.log("7:pour Factorielle")
    const operation = prompt("l operation:").trim();
     let n1,n2,result;
    
    switch (operation) {
        case `1`:
            n1 = +prompt("Entrez le premier nombre: ");
            n2 = +prompt("Entrez le deuxième nombre: ");
            result = add(n1, n2);
            console.log("Résultat: " + result);
            break;
        case `2`:
            n1 = +prompt("Entrez le premier nombre: ");
            n2 = +prompt("Entrez le deuxième nombre: ");
            result = moin(n1, n2);
            console.log("Résultat: " + result);
            break;
        case `3`:
            n1 = +prompt("Entrez le premier nombre: ");
            n2 = +prompt("Entrez le deuxième nombre: ");
            result = mult(n1, n2);
            console.log("Résultat: " + result);
            break;
        case `4`:
            n1 = +prompt("Entrez le premier nombre: ");
            n2 = +prompt("Entrez le deuxième nombre: ");
            result = dev(n1, n2);
            console.log("Résultat: " + result);
            break;
            
            case `5`:
                n1 = +prompt("Entrez la base: ");
                n2 = +prompt("Entrez l'exposant: ");
            result =Puissance(n1, n2);
            console.log("Résultat: " + result);
            break;
            case`6`:
            n1= +prompt ("entrez un nombre")
            result = racineCarree(n1);
            console.log("Résultat:" + result);
             break;  
             case`7`:
             n1 = +prompt("Entrez un nombre pour calculer la factorielle:")
             result = Factorielle(n1);
             console.log("resultat:" +result);
             break;

        default:
            console.log("erreur");
            break;
    }

    const continuer = prompt("voulez vous continuer y/n ?:")
    if (continuer!== `y`) {
        break;
    }
}