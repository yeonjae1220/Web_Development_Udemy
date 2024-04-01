function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; // +'1' => 1
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error'); // error 가 없으면 그냥 넘어간다
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = ''; // id로 쓰는게 편하지만 DOM 연습을 해봄
}

function savePlayerConfig(event) {
    event.preventDefault();
    // console.log(event)
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim();
    // console.log(enteredPlayername);

    if(!enteredPlayername) {
        // event.target.firstElementChild.className = 'error';
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return;
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;

    players[editedPlayer - 1].name = enteredPlayername;

    closePlayerConfig();
}