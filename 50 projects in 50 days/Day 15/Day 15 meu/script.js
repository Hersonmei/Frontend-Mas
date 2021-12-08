const counter = document.querySelectorAll('.counter')

counter.forEach(count => {
    count.innerText = '0'

    const updateCounter = () => {
        const target = +count.getAttribute('data-target')
        const c = +count.innerText
        console.log(c);

        const increment = target / 200

        if(c < target) {
            count.innerText = `${(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            count.innerText = target
        }
    }

    updateCounter()


})