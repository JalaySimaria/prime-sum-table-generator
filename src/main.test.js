'use strict';

const { generateTable } = require('./main');

describe('Configuration mandatory checks', () => {
    it('function cannot be called without a configuration', () => {
        expect(generateTable()).toEqual(expect.arrayContaining(['Configuration required']));
    });

    it('configuration cannot be empty', () => {
        expect(generateTable()).toEqual(expect.arrayContaining(['Configuration required']));
    });
});

describe('Configuration fields mandatory check', () => {
    it('fields of the configuration cannot be empty', () => {
        expect(
            generateTable({
                width: '',
                height: '',
                numberType: '',
                formulaType: ''
            })
        ).toEqual(
            expect.arrayContaining([
                'Width is a required field.',
                'Height is a required field.',
                'Number Type is a required field.',
                'Formula Type is a required field.'
            ])
        );
    });
});

describe('Width checks', () => {
    it('it cannot contain a string', () => {
        expect(
            generateTable({
                width: 'abc',
                height: 3,
                numberType: 'prime',
                formulaType: 'add'
            })
        ).toEqual(expect.arrayContaining(['Width can contain only integer value.']));
    });

    it('it cannot contain a float', () => {
        expect(
            generateTable({
                width: 10.2,
                height: 3,
                numberType: 'prime',
                formulaType: 'add'
            })
        ).toEqual(expect.arrayContaining(['Width can contain only integer value.']));
    });

    it('it cannot contain an object', () => {
        expect(
            generateTable({
                width: {},
                height: 3,
                numberType: 'prime',
                formulaType: 'add'
            })
        ).toEqual(expect.arrayContaining(['Width can contain only integer value.']));
    });
});

describe('Height checks', () => {
    it('it cannot contain a string', () => {
        expect(
            generateTable({
                width: 3,
                height: 'abc',
                numberType: 'prime',
                formulaType: 'add'
            })
        ).toEqual(expect.arrayContaining(['Height can contain only integer value.']));
    });

    it('it cannot contain a float', () => {
        expect(
            generateTable({
                width: 3,
                height: 10.2,
                numberType: 'prime',
                formulaType: 'add'
            })
        ).toEqual(expect.arrayContaining(['Height can contain only integer value.']));
    });

    it('it cannot contain an object', () => {
        expect(
            generateTable({
                width: 3,
                height: {},
                numberType: 'prime',
                formulaType: 'add'
            })
        ).toEqual(expect.arrayContaining(['Height can contain only integer value.']));
    });
});

describe('Number Type checks', () => {
    it('it cannot be a number', () => {
        expect(
            generateTable({
                width: 3,
                height: 3,
                numberType: 3,
                formulaType: 'add'
            })
        ).toEqual(expect.arrayContaining(['Number Type can only be string.']));
    });

    it('it cannot be an object', () => {
        expect(
            generateTable({
                width: 3,
                height: 3,
                numberType: {},
                formulaType: 'add'
            })
        ).toEqual(expect.arrayContaining(['Number Type can only be string.']));
    });

    it('it only supports "prime" and "fibonacci"', () => {
        expect(
            generateTable({
                width: 3,
                height: 3,
                numberType: 'something',
                formulaType: 'add'
            })
        ).toEqual(expect.arrayContaining(['Only Prime and Fibonacci are supported.']));
    });
});

describe('Formula Type checks', () => {
    it('it cannot be a number', () => {
        expect(
            generateTable({
                width: 3,
                height: 3,
                numberType: 'prime',
                formulaType: 3
            })
        ).toEqual(expect.arrayContaining(['Formula Type can only be string.']));
    });

    it('it cannot be an object', () => {
        expect(
            generateTable({
                width: 3,
                height: 3,
                numberType: 'prime',
                formulaType: {}
            })
        ).toEqual(expect.arrayContaining(['Formula Type can only be string.']));
    });

    it('it only supports "add" and "add1Mul"', () => {
        expect(
            generateTable({
                width: 3,
                height: 3,
                numberType: 'prime',
                formulaType: 'something'
            })
        ).toEqual(expect.arrayContaining(['Only add and add1Mul are supported.']));
    });
});

describe('Matrix output checks', () => {
    it('0 width should return empty matrix', () => {
        expect(
            generateTable({
                width: 0,
                height: 1,
                numberType: 'prime',
                formulaType: 'add'
            })
        ).toEqual(expect.arrayContaining([]));
    });

    it('0 height should return empty matrix', () => {
        expect(
            generateTable({
                width: 1,
                height: 0,
                numberType: 'prime',
                formulaType: 'add'
            })
        ).toEqual(expect.arrayContaining([]));
    });

    it('1x1 prime add', () => {
        expect(
            generateTable({
                width: 1,
                height: 1,
                numberType: 'prime',
                formulaType: 'add'
            })
        ).toEqual(expect.arrayContaining([[4]]));
    });

    it('1x1 prime add1Mul', () => {
        expect(
            generateTable({
                width: 1,
                height: 1,
                numberType: 'prime',
                formulaType: 'add1Mul'
            })
        ).toEqual(expect.arrayContaining([[6]]));
    });

    it('1x1 fibonacci add', () => {
        expect(
            generateTable({
                width: 1,
                height: 1,
                numberType: 'fibonacci',
                formulaType: 'add'
            })
        ).toEqual(expect.arrayContaining([[0]]));
    });

    it('1x1 fibonacci add1Mul', () => {
        expect(
            generateTable({
                width: 1,
                height: 1,
                numberType: 'fibonacci',
                formulaType: 'add1Mul'
            })
        ).toEqual(expect.arrayContaining([[0]]));
    });

    it('2x2 prime add', () => {
        expect(
            generateTable({
                width: 2,
                height: 2,
                numberType: 'prime',
                formulaType: 'add'
            })
        ).toEqual(expect.arrayContaining([[4, 5], [5, 6]]));
    });

    it('2x2 prime add1Mul', () => {
        expect(
            generateTable({
                width: 2,
                height: 2,
                numberType: 'prime',
                formulaType: 'add1Mul'
            })
        ).toEqual(expect.arrayContaining([[6, 8], [9, 12]]));
    });

    it('2x2 fibonacci add', () => {
        expect(
            generateTable({
                width: 2,
                height: 2,
                numberType: 'fibonacci',
                formulaType: 'add'
            })
        ).toEqual(expect.arrayContaining([[0, 1], [1, 2]]));
    });

    it('2x2 fibonacci add1Mul', () => {
        expect(
            generateTable({
                width: 2,
                height: 2,
                numberType: 'fibonacci',
                formulaType: 'add1Mul'
            })
        ).toEqual(expect.arrayContaining([[0, 0], [1, 2]]));
    });

    it('3x3 prime add', () => {
        expect(
            generateTable({
                width: 3,
                height: 3,
                numberType: 'prime',
                formulaType: 'add'
            })
        ).toEqual(expect.arrayContaining([[4, 5, 7], [5, 6, 8], [7, 8, 10]]));
    });

    it('3x3 prime add1Mul', () => {
        expect(
            generateTable({
                width: 3,
                height: 3,
                numberType: 'prime',
                formulaType: 'add1Mul'
            })
        ).toEqual(expect.arrayContaining([[6, 8, 12], [9, 12, 18], [15, 20, 30]]));
    });

    it('3x3 fibonacci add', () => {
        expect(
            generateTable({
                width: 3,
                height: 3,
                numberType: 'fibonacci',
                formulaType: 'add'
            })
        ).toEqual(expect.arrayContaining([[0, 1, 1], [1, 2, 2], [1, 2, 2]]));
    });

    it('3x3 fibonacci add1Mul', () => {
        expect(
            generateTable({
                width: 3,
                height: 3,
                numberType: 'fibonacci',
                formulaType: 'add1Mul'
            })
        ).toEqual(expect.arrayContaining([[0, 0, 0], [1, 2, 2], [1, 2, 2]]));
    });
});
