const contents = document.querySelectorAll('.content')

console.log(contents);
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item, idx) => {
    item.addEventListener('click', ()=> {
        removeAllShow()
        removeAllActive()

        contents[idx].classList.add('show')
        item.classList.add('active')
    })
})

function removeAllShow() {
    contents.forEach((content) => content.classList.remove('show'))
}


function removeAllActive() {
    listItems.forEach((item) => item.classList.remove('active'))
}