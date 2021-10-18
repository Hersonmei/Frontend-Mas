let number = Math.floor(Math.random() * 2);

let guess = prompt('Escolhe um número de 1 a 3');

while (guess !== number) {
    guess = prompt("Ainda não acertou")
    if (guess === number) break;
}

console.log("Parabéns! Você acertou!");