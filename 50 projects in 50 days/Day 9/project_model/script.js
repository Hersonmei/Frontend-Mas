const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    console.log(document.getElementById(sound));

    btn.addEventListener('click', () => {
       stopSongs()

       document.getElementById(sound).play();
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {

    sounds.forEach(sound => {
        document.getElementById(sound).pause();
        currentTime = 0
    })
    

}

