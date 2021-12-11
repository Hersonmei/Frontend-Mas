const content = document.querySelector('.content')
const imgURL = 'https://source.unsplash.com/random/'
const ROWS = 5

for(let i = 0; i < ROWS * 3; i++){
const img = document.createElement('img')
img.src = `${imgURL}${tamImg()}`


content.appendChild(img)
}

function tamImg () {
    return `${randomNR()}x${randomNR()}`
}

function randomNR () {
    return Math.floor(Math.random() * 10) + 300
}