
const character = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    image: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',

    attacked: function() {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            alert('The character has died!');
        }
    },

    levelUp: function() {
        this.level++;
    }
};

function displayCharacter() {
    document.querySelector('#character-name').textContent = character.name;
    document.querySelector('#character-class').textContent = character.class;
    document.querySelector('#character-level').textContent = character.level;
    document.querySelector('#character-health').textContent = character.health;
    document.querySelector('#character-image').src = character.image;
}

document.querySelector('#attacked').addEventListener("click", function() {
    if (character.health > 0) {
        character.attacked();
        displayCharacter();
    }
});

document.querySelector('#level-up').addEventListener("click", function() {
    if (character.health > 0) {
        character.levelUp();
        displayCharacter();
    }
});

displayCharacter();
