const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We love programing!'
let idx = 1
let speed = 300 / speedEl.value

// console.log(speedEl);
chamadas()

function chamadas(){
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }
    
    setTimeout(chamadas, speed)
    

    

}

speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value
})