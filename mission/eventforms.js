const form = document.querySelector(`#eventTicket`);
const travelRange = document.querySelector(`#travelRange`);
const studentContainer = document.querySelector(`#studentContainer`);
const guestContainer = document.querySelector(`#guestContainer`);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log(form.firstName.value);

});

travelRange.addEventListener('change', () => {

    if (travelRange.value === 'one') {
        studentContainer.hidden = false;
        guestContainer.hidden = true;
    }

    else if (travelRange.value === 'many') {
        studentContainer.hidden = true;
        guestContainer.hidden = false;
    }
    else {
        studentContainer.hidden = true;
        guestContainer.hidden = true;
    }

});

