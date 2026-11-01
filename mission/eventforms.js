const form = document.querySelector("#eventTicket");
const type = document.querySelector("#type");
const studentContainer = document.querySelector("#studentContainer");
const guestContainer = document.querySelector("#guestContainer");
const output = document.querySelector("#output");

function updateFields() {
  const type = type.value;

form.addEventListener('submit', (event) => {

    event.preventDefault();

    console.log(form.firstName.value);

});

if(studentContainer.length == 9) {
    output.textContent = "Student I# must be 9 digits long.";
    return;
  }

  studentContainer.hidden = type !== "one";

  guestContainer.hidden = type !== "many";
}

type.addEventListener("change", updateFields);
updateFields();



