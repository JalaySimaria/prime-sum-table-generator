'use strict';

const { nNumbers, processNumbers, validateConfiguration } = require('../utils/main');

/**
 * Main function to be called which generates the table.
 * @param {object} configuration An object containing the values of width, height, number type and formula type
 * @returns {array} Either an array fo errors or a 2 dimentional array which represents a table of width*height.
 */
module.exports.generateTable = configuration => {
    const errors = validateConfiguration(configuration);

    if (errors.length) return errors;

    const { width, height, numberType, formulaType } = configuration;

    if (width < 1 || height < 1) return [];

    const numbers = nNumbers(Math.max(width, height), numberType),
        table = [];

    for (let i = 0; i < height; i++) {
        table.push([]);
        for (let j = 0; j < width; j++) {
            table[i][j] = processNumbers(numbers[i], numbers[j], formulaType);
        }
    }

    return table;
};
