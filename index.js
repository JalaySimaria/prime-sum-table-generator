/**
 * A utility function which checks if a number is prime or not.
 * @param {number} num - Number to be checked.
 * @returns {boolean} Is num prime or not.
 */
function isPrime(num) {
    for (let i = 2, j = Math.sqrt(num); i <= j; i++) {
        if (num % i === 0) return false;
    }

    return num > 1;
}

/**
 * A utility function used to generate an array of first n prime numbers.
 * This function internally uses isPrime function to perform check is number is prime.
 * @param {number} n - Prime number to be generated.
 * @returns {array} An array of first n prime numbers.
 */
function nPrimeNumbers(n) {
    const array = [];
    let num = 2;

    while (array.length < n) {
        if (isPrime(num)) array.push(num);

        num++;
    }

    return array;
}

/**
 * Main function to be called which generates the table.
 * @param {number} n - Used to generate a table of n*n. Defaulted to 0.
 * @returns {array} - A 2 dimentional array which represents a table of n*n.
 */
function generateTable(n = 0) {
    if (n < 1) return [];

    const primes = nPrimeNumbers(n),
        table = [];

    for (let i = 0; i < n; i++) {
        table.push([]);
        for (let j = 0; j < n; j++) {
            table[i][j] = primes[i] + primes[j];
        }
    }

    return table;
}

// Performing some tests
console.log(JSON.stringify(generateTable(-1), null, '\t'));
console.log(JSON.stringify(generateTable(0), null, '\t'));
console.log(JSON.stringify(generateTable(1), null, '\t'));
console.log(JSON.stringify(generateTable(2), null, '\t'));
console.log(JSON.stringify(generateTable(3), null, '\t'));
console.log(JSON.stringify(generateTable(4), null, '\t'));
