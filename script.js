let pos = 0;
let pos2 = pos;
const cuphead = document.querySelector('.cuphead');
const cj = document.querySelector('.cj');
const pulo = (event) => {
    if (event.code === 'Space' || event.code === 'SpaceBar') {
        cuphead.classList.add('pulo'); 
        setTimeout(() => {
            cuphead.classList.remove('pulo');
        }, 500);
    }
}

document.addEventListener('keydown', pulo);


const dash = (event) => {
    if (event.code === 'ArrowRight' || event.code === 'ShiftRight') {
        cuphead.classList.add('dash'); 
        setTimeout(() => {
            pos += 200;
            cuphead.style.left = `${pos}px`;
            cuphead.classList.remove('dash');
        }, 200);
    }
}

document.addEventListener('keydown', dash);

const dashLeft = (event) => {
    if (event.code === 'ArrowLeft') {
        cuphead.classList.add('dashleft'); 
        setTimeout(() => {
            pos -= 200;
            cuphead.style.left = `${pos}px`;
            cuphead.classList.remove('dashleft');
        }, 200);
    }
}

document.addEventListener('keydown', dashLeft);

const bala = (event) => {
    if (event.code === 'CtrlLeft' || event.code === 'j') {
        cj.classList.add('bala'); 
        setTimeout(() => {
            cj.classList.remove('tiro');
        }, 500);
    }
}


const gameBoard = document.querySelector('.game-board');


const bola = document.querySelector('.bola');
let gameRunning = true;
    const checkCollision = () => {
        const cupheadRect = cuphead.getBoundingClientRect();
        const bolaRect = bola.getBoundingClientRect();
        
        if (cupheadRect.right < bolaRect.left || 
            cupheadRect.left > bolaRect.right ||
            cupheadRect.bottom < bolaRect.top ||
            cupheadRect.top > bolaRect.bottom) {
                return false;
        } else {
            restartGame();
            return true;
        }
    }

    const restartGame = () => {
        gameRunning = false;
        alert('Game over!');
        gameRunning = true;
    }

    const gameLoop = () => {
        if (gameRunning) {
            checkCollision();
            requestAnimationFrame(gameLoop);
        }
    };

    gameLoop();

