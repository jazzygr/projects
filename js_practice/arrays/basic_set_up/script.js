let upper = 10000;
let randomNumber = getRandomNumber(upper);

function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper ) + 1;
}
