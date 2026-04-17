function setup() {
  createCanvas(400, 400);
  let number = 29;
  let isPrime = checkPrime(number);
  console.log(number + " is " + (isPrime ? "a prime number" : "not a prime number"));
}

function checkPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}