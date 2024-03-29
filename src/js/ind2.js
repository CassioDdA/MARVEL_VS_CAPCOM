const listOfCharacters = document.querySelectorAll(".character");

let currentPlayer = 1;

function updateCharacterSelection(character) {
  
    if (!character.classList.contains('selected')) {
        
        document.querySelector('.selected.player-' + currentPlayer).classList.remove('selected', 'player-' + currentPlayer);

        character.classList.add('selected', 'player-' + currentPlayer);

        const tagToShow = currentPlayer === 1 ? '1P' : '2P';


        const allTags = document.querySelectorAll('.tag');
        allTags.forEach(tag => {
            tag.style.display = 'none';
        });

    
        const tags = character.querySelectorAll('.tag');
        tags.forEach(tag => {
            if (tag.innerText === tagToShow) {
                tag.style.display = 'block';
            }
        });

  
        const idSelected = character.getAttribute('id');

        const selectionPlayer = document.getElementById('p' + currentPlayer);
        selectionPlayer.src = `/src/img/Nova pasta/${idSelected}.png`;

        const nameSelected = character.getAttribute('data-name');
        const namePlayer = document.getElementById('name-' + currentPlayer + 'p');
        namePlayer.innerText = nameSelected;
    };
};


listOfCharacters.forEach((character) => {
    character.addEventListener('click', () => {
        updateCharacterSelection(character);

        currentPlayer = currentPlayer === 1 ? 2 : 1;
    });

    character.addEventListener('mouseenter', () => {
        updateCharacterSelection(character);
    });
});


listOfCharacters.forEach((character) => {
  character.addEventListener('mouseenter', () => {
      updateCharacterSelection(character);

      const audioPlayer = document.getElementById('audioPlayer');
      audioPlayer.currentTime = 0;
      audioPlayer.play();
  });
});


const listCharacters = document.querySelectorAll('.character');

listCharacters.forEach((character) =>{
  character.addEventListener('click', () => {
    const audioFile = character.getAttribute('data-audio');

    const audioP = new Audio(audioFile);

    audioP.play();
  });
});
