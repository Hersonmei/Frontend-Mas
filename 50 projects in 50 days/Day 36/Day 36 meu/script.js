const container = document.getElementById('container')
const btn = document.querySelectorAll('.btn')
const colors = []

const SQUARES = 500

for(let i = 0; i < SQUARES; i++){
    const element = document.createElement('div')
    element.classList.add('square')

    element.addEventListener('mouseover', () => setColor(element))
    element.addEventListener('mouseout', () => removeColor(element))


    container.appendChild(element)
}

function setColor(element){
    const color = defineColor()
    element.style.background = `${color}`
    element.style.boxShadow = `0 0 2px ${color}, 0 0 3px ${color}`
}

function removeColor(element){
    element.style.background = '#111111'
    element.style.boxShadow = '0 0 2px #1d1d1d' 
}

function defineColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

btn.forEach(button => {
    console.log(button);
    
    button.addEventListener('click', () => {
    const styleBackground = window.getComputedStyle(button)
    if(!colors.includes(styleBackground.getPropertyValue('background-color')))
        colors.push(styleBackground.getPropertyValue('background-color'))
    })
    console.log(colors);
})
    