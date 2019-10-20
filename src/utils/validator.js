'use strict';

/**
 * Validator function for width.
 * @param {string/number} num User entered value for width of the matrix.
 * @returns {string} Validation output.
 */
function width(num = '') {
    let error = '';

    if (num === '') error = 'Width is a required field.';
    else if (isNaN(+num) || +num !== parseInt(num)) error = 'Width can contain only integer value.';

    return error;
}

/**
 * Validator function for height.
 * @param {string/number} num User entered value for height of the matrix.
 * @returns {string} Validation output.
 */
function height(num = '') {
    let error = '';

    if (num === '') error = 'Height is a required field.';
    else if (isNaN(+num) || +num !== parseInt(num))
        error = 'Height can contain only integer value.';

    return error;
}

/**
 * Validator function for Number Type.
 * At the moment only Prime and Fibonacci are supported.
 * @param {string} type User entered value for Number Type.
 * @returns {string} Validation output.
 */
function numberType(type = '') {
    const numType = typeof type;
    let error = '';

    if (numType !== 'string') error = 'Number Type can only be string.';
    else if (!type) error = 'Number Type is a required field.';
    else if (type !== 'prime' && type !== 'fibonacci')
        error = 'Only Prime and Fibonacci are supported.';

    return error;
}

/**
 * Validator function for Formula Type.
 * At the moment only add and add1Mul are supported.
 * @param {string} type User entered value for Formula Type.
 * @returns {string} Validation output.
 */
function formulaType(type = '') {
    const formType = typeof type;
    let error = '';

    if (formType !== 'string') error = 'Formula Type can only be string.';
    else if (!type) error = 'Formula Type is a required field.';
    else if (type !== 'add' && type !== 'add1Mul') error = 'Only add and add1Mul are supported.';

    return error;
}

module.exports = {
    width,
    height,
    numberType,
    formulaType
};
