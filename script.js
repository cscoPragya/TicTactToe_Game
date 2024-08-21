let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleCellClick(index) {
    if (gameBoard[index] === '' && gameActive) {
        playButtonSound();
        gameBoard[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;

        if (checkWin()) {
            showResult(`Player ${currentPlayer} wins!🎊`);
        } else if (gameBoard.every(cell => cell !== '')) {
            showResult('It\'s a draw! ⚖');
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function showResult(message) {
    document.getElementById('result-message').innerText = message;
    document.getElementById('result-popup').style.display = 'block';
    gameActive = false;
}

function resetGame() {
    document.getElementById('result-popup').style.display = 'none';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';

    // Reset cell texts
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winConditions.some(condition =>
        condition.every(index => gameBoard[index] === currentPlayer)
    );
}

function playButtonSound() {
    const buttonSound = document.getElementById('button-sound');
    buttonSound.currentTime = 0; // Reset sound to the beginning
    buttonSound.play();
}
