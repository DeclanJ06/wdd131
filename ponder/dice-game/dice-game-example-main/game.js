// click on button
document.querySelector('#rollButton').addEventListener("click", e => {

// animate dice
setDieImages("assets/die_rolling.gif");
// land on a new random number
    setTimeout(() => {
        // this function will run after the timeout duration below
        setDieImages("assets/white_dice_6.gif");

        document.querySelectorAll('#gameboard img').forEach(image => {
        const randomNumber = Math.ceil(Math.random() * 6);
        image.src = `assets/white_dice_${randomNumber}.gif`;

        // MAth.random() returns number 0 through 1 as a decimal
        // example.0.323536
        //math.floor() rounds down to the nearest whole int

        });
    }, 1000);

});


function setDieImages(imagePath) {
    document.querySelectorAll('#gameboard img').forEach(image => {
        image.src = imagePath;
    });

}