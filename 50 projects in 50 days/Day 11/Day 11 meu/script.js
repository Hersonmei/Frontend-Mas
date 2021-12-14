const content = document.querySelector('.content')

window.addEventListener('keydown', (event) => {
    content.innerHTML = `
    <div>
        <div class="key">
            ${event.key === ' ' ? 'Space' : event.key}
            <small>event.key</small>
        </div>
    </div>

    <div>
        <div class="key">
            ${event.keyCode}
            <small>event.keyCode</small>
        </div>
    </div>

    <div>
        <div class="key">
            ${event.code}
            <small>event.code</small>
        </div>
    </div>
    `





})