function startNewgame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please set custom player names for both players!');
        return
    }
    
    activePlayerNameElement.textContent = players[activePlayer].name
    gameAreaElement.style.display = 'block';
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
    // console.log(event.target.tagName);
    if (event.target.tagName !== 'LI') {
        return
    }

    
    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1; // 수학 연산이 들어가있기에 문자열 앞에 + 붙일 필요는 없다
    const selectedRow = selectedField.dataset.row - 1;

    if(gameData[selectedColumn][selectedRow] > 0) {
        alert('Please select an empty field!')
        return;
    }

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');

    gameData[selectedColumn][selectedRow] = activePlayer + 1;
    console.log(gameData);

    switchPlayer();
}