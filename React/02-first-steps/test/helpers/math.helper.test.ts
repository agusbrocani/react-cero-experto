import {
    describe,
    expect,
    test
} from 'vitest'
import {
    add,
    divide,
    multiply,
    subtract
} from '../../src/helpers/math.helper'

describe('add', () => {
    test('should add two positives numbers', () => {
        //! Arrange
        const a = 1;
        const b = 3;

        //! Act
        const result = add(a, b);

        //! Assert
        expect(result).toBe(a + b);
    });
});

describe('subtract', () => {
    test('should subtract two positive numbers', () => {
        //! Arrange
        const a = 1;
        const b = 3;

        //! Act
        const result = subtract(a, b);

        //! Assert
        expect(result).toBe(a - b);
    });

    test('should subtract two negative numbers', () => {
        //! Arrange
        const a = -1;
        const b = -3;

        //! Act
        const result = subtract(a, b);

        //! Assert
        expect(result).toBe(a - b);
    });
});

describe('multiply', () => {
    test('should multiply two positives numbers', () => {
        //! Arrange
        const a = 1;
        const b = 3;

        //! Act
        const result = multiply(a, b);

        //! Assert
        expect(result).toBe(a * b);
    });

    test('should multiply zero with other number', () => {
        //! Arrange
        const a = 0;
        const b = 3;

        //! Act
        const result = multiply(a, b);

        //! Assert
        expect(result).toBe(a * b);
    });

    test('should divide two positives numbers', () => {
        //! Arrange
        const a = 4;
        const b = 2;

        //! Act
        const result = divide(a, b);

        //! Assert
        expect(result).toBe(a / b);
    });
});
