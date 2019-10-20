'use strict';

const validators = require('./validator');

/**
 * A utility function which checks if a number is prime or not.
 * @param {number} num Number to be checked.
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
 * @param {number} n Prime number to be generated.
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
 * A utility function used to generate an array of first n fibonacci numbers.
 * @param {number} n Fibonacci number to be generated.
 * @returns {array} An array of first n fibonacci numbers.
 */
function nFibonacciNumbers(n) {
    if (!n) return [];
    else if (n === 1) return [0];
    else if (n === 2) return [0, 1];
    else {
        const array = [0, 1];
        let i;
        for (i = 3; i <= n; i++) {
            array.push(array[array.length - 1] + array[array.length - 2]);
        }

        return array;
    }
}

/**
 * A utility function which switches number type based on the function parameter and uses that function for generating first n numbers of that type.
 * Mapper declared in the function takes care of switching number type logic.
 * @param {number} [n=0] Numbers to be generated.
 * @param {string} [type='prime'] Number type i.e. Prime or Fibonacci
 * @returns {array} An array of first n numbers.
 */
function nNumbers(n = 0, type = 'prime') {
    const mapper = {
        prime: nPrimeNumbers,
        fibonacci: nFibonacciNumbers
    };

    if (mapper[type]) return mapper[type](n);
    else throw 'Number Type not supported';
}

/**
 * A utility function which uses the formula type and the formula associated to it for calculating the element value.
 * 2 formula types available:
 * 1) add : (Xi + Xj)
 * 2) add1Mul : (Xi * (Xj +1))
 * @param {number} [i=0] Xi
 * @param {number} [j=0] Xj
 * @param {string} [formulaType='add'] Formula type i.e. add or add1Mul.
 * @returns {number} Calculated value of matrix element using the formula.
 */
function processNumbers(i = 0, j = 0, formulaType = 'add') {
    switch (formulaType) {
        case 'add':
            return i + j;
        case 'add1Mul':
            return i * (j + 1);
        default:
            throw 'Formula Type not supported';
    }
}

/**
 * A utility function for validating the matrix configuration.
 * @param {object} [configuration={}] Matrix configuration with widht, height, number type and formula type.
 * @returns {array} An array of errores if found, else empty array.
 */
function validateConfiguration(configuration = {}) {
    if (!configuration || !Object.keys(configuration).length) return ['Configuration required'];

    const errors = [];
    let error;

    for (let validator in validators) {
        error = validators[validator](configuration[validator]);
        if (error) errors.push(error);
    }

    return errors;
}

module.exports = {
    nNumbers,
    processNumbers,
    validateConfiguration
};
