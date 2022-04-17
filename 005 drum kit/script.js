window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    if (!audio) return;
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    setTimeout(function() { // fallback if flooded with key inputs
        key.classList.remove('playing');
    }, audio.duration * 1000 + 200);
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition) );