let maximun = parseInt (prompt('Enter the maximun number!'))
while(!maximun) {
    maximun = parseInt(prompt("Enter a valid number!"))
}

const targetNum = Math.floor(Math.random() * maximun) + 1

console.log(targetNum);