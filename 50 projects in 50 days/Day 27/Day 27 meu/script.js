const toasts = document.getElementById('toasts')
const button = document.getElementById('button')

const message = ['Message One', 'Message Two', 'Message Three', 'Message Four']

const types = ['sucess', 'error', 'info']

button.addEventListener('click', () => createNotification())

function createNotification () {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(getRandomType())

    notif.innerText = getRandomMessage()

    setTimeout(() => {
        notif.remove()
    }, 3000)

    toasts.appendChild(notif)
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}

function getRandomMessage() {
    return message[Math.floor(Math.random() * message.length)]
}