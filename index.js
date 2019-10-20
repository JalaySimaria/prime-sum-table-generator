'use strict';

const { createInterface } = require('readline');
const { generateTable } = require('./src/main');

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = {
    width: 0,
    height: 0,
    numberType: 'prime',
    formulaType: 'add'
};

const questions = {
    width() {
        return new Promise((resolve, reject) => {
            rl.question('Matrix width? ', answer => {
                input.width = +answer;
                resolve();
            });
        });
    },
    height() {
        return new Promise((resolve, reject) => {
            rl.question('Matrix height? ', answer => {
                input.height = +answer;
                resolve();
            });
        });
    },
    numberType() {
        const mapper = {
            '1': 'prime',
            '2': 'fibonacci'
        };
        return new Promise((resolve, reject) => {
            rl.question(
                `Number type? Select a number:
1) Prime
2) Fibonacci
`,
                answer => {
                    input.numberType = mapper[answer];
                    resolve();
                }
            );
        });
    },
    formulaType() {
        const mapper = {
            '1': 'add',
            '2': 'add1Mul'
        };
        return new Promise((resolve, reject) => {
            rl.question(
                `Formula type? Select a number:
1) (Xi + Xj)
2) (Xi * (Xj +1))
`,
                answer => {
                    input.formulaType = mapper[answer];
                    resolve();
                }
            );
        });
    }
};

const main = async () => {
    for (let question in questions) {
        await questions[question]();
    }
    rl.close();

    console.log(generateTable(input));
};

main();
