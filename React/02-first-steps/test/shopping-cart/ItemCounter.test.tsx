import {
    describe,
    expect,
    test
} from 'vitest';
import {
    render,
    screen
} from '@testing-library/react';
import ItemCounter from '../../src/shopping-cart/ItemCounter';


describe('ItemCounter', () => {
    test('should render with default values', () => {
        render(<ItemCounter name="Test item" />);

        screen.debug();
    });
});