import {
    describe,
    expect,
    test,
} from 'vitest';
import {
    fireEvent,
    render,
    screen
} from '@testing-library/react';
import ItemCounter from '../../src/shopping-cart/ItemCounter';


describe('ItemCounter', () => {
    test('should render with default values', () => {
        //! Arrange: preparo el sujeto de pruebas
        const name = 'Test item';
        //! Act
        render(<ItemCounter name={name} />);
        // screen.debug();
        //! Assert
        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();
    });

    test('should render with custom quantity', () => {
        //! Arrange: preparo el sujeto de pruebas
        const name = 'Test item';
        const quantity = 10;
        //! Act
        render(<ItemCounter name={name} quantity={quantity} />);
        //! Assert
        expect(screen.getByText(quantity)).toBeDefined();
    });

    test('should increase count when +1 button is pressed', () => {
        render(<ItemCounter name={'Test item'} quantity={1} />);

        const buttonAdd = screen.getByText('+1');
        fireEvent.click(buttonAdd);
        expect(screen.getByText('2', { selector: 'span' })).toBeDefined();
    });

    test('should decrease count when -1 button is pressed', () => {
        // quantity = 5
        render(<ItemCounter name={'Test item'} quantity={5} />);
        const buttonSubtract = screen.getByText('-1');
        fireEvent.click(buttonSubtract);
        expect(screen.getByText('4', { selector: 'span' })).toBeDefined();

    });

    test('should not decrease count when -1 button is pressed and quantity is 0', () => {
        render(<ItemCounter name={'Test item'} quantity={0} />);
        const buttonSubtract = screen.getByText('-1');
        fireEvent.click(buttonSubtract);
        expect(screen.getByText('0', { selector: 'span' })).toBeDefined();
    });

    test('should change to red when count is 0', () => {
        const quantity = 0;
        const name = 'Test item'
        render(<ItemCounter name={name} quantity={quantity} />);

        const itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('red');
    });

    test('should change to black when count is greater than 0', () => {
        const quantity = 1;
        const name = 'Test item'
        render(<ItemCounter name={name} quantity={quantity} />);

        const itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('black');
    });
});
