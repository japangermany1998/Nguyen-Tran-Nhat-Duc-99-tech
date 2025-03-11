import { strict as assert } from 'assert';
import { sum_to_n_a, sum_to_n_b, sum_to_n_c } from './sum_to_n';

class TestCase {
    cases: number;
    expected_result: number;

    constructor(cases: number, expected_result:number) {
        this.cases = cases;
        this.expected_result = expected_result;
    }
}


const cases = [
    new TestCase(1, 1),
    new TestCase(5, 15),
    new TestCase(100, 5050),
    // You can add more test cases here
];
describe('sum_to_n_a', () => {

    for (const testcase of cases){
        let result = sum_to_n_a(testcase.cases)
        it(`with n = ${testcase.cases}, expected result is ${testcase.expected_result}, actual result is ${result}`, () => {
            assert.strictEqual(result, testcase.expected_result);
        });
    }
});

describe('sum_to_n_b', () => {
    for (const testcase of cases){
        let result = sum_to_n_b(testcase.cases)
        it(`with n = ${testcase.cases}, expected result is ${testcase.expected_result}, actual result is ${result}`, () => {
            assert.strictEqual(result, testcase.expected_result);
        });
    }
});

describe('sum_to_n_c', () => {
    for (const testcase of cases){
        let result = sum_to_n_c(testcase.cases)
        it(`with n = ${testcase.cases}, expected result is ${testcase.expected_result}, actual result is ${result}`, () => {
            assert.strictEqual(result, testcase.expected_result);
        });
    }
});
