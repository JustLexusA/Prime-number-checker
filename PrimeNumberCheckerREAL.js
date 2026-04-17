const number = 180;
let PrimeNumber;
let PrimeText;

function setup() {
    createCanvas(windowWidth, windowHeight);
    PrimeNumber = true
    PrimeText = 'is a prime number'
    CheckIfPrime()
}

function CheckIfPrime() {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            PrimeNumber = false
            if (!PrimeNumber) {
                PrimeText = 'is not a prime number'
            }
        }
    }
    // Display the result
    fill('rgb(0, 0, 0)')
    textAlign(CENTER, CENTER)
    textSize(32)
    text(`${number} ${PrimeText}`, windowWidth/2, windowHeight/2)
}