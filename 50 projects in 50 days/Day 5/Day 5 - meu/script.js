const loadText = document.querySelector('.loadText')
const bg = document.querySelector('.bg')

load = 0

const int = setInterval(funcBlur, 30)


function funcBlur() {
    load++
    
    if(load > 99){
        clearInterval(int)
    }

    loadText.innerText = `${scale(load, 0 , 100, 0, 100)}%`
    bg.style.filter = `blur(${scale(load, 0 , 100, 30, 0)}px)`
    loadText.style.opacity = `${scale(load, 0 , 100, 1, 0)}`
}


const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }

