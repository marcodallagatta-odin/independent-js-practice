const wholePage = document.querySelector('body');
const balloon = document.querySelector('.balloon');

let timesRun = 0;

function makeBigger(amount) {
    if (timesRun > 5) {
        balloon.innerText = '💥';
        balloon.style.color = 'red';
        return;
    }
    timesRun += 1;
    const current = parseInt(window.getComputedStyle(document.querySelector('.balloon')).fontSize);
    balloon.style.fontSize = `${current + amount * timesRun}px`;
}

wholePage.addEventListener('click', function() { makeBigger(30) } );