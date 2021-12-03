const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', showBox)

function showBox() {
    const heightView = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const topBox = box.getBoundingClientRect().top
        
        if(heightView > topBox) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })

    
}


