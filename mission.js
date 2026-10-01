

let selectElem = document.querySelector('#theme-select');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current === 'dark') {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = 'white';
    } else if (current === 'light') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}

