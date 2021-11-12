const searchItem = document.querySelector('.search');
const btn = document.querySelector('.btn');


btn.addEventListener('click', function () {
    searchItem.classList.toggle('active');
})