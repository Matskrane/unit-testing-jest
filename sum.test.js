import { sum } from'./sum';
import {substraction} from './sum';
import {multiply, divide} from './sum';

test('adds 1 + 2 to equal 3', () => {  
    expect(sum(1, 2)).toBe(3);
});

test('substraction', () => {
    expect(substraction(2, 1)).toBe(1);
});

test('multiply', () => {
    expect(multiply(10, 10)).toBe(100);
});

test('divide', () => {
    expect(divide(100, 10)).toBe(10);
});



