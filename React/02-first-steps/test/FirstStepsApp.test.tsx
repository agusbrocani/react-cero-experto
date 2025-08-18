import {
    afterEach,
    describe,
    expect,
    test,
    vi
} from 'vitest';
import {
    render,
    screen
} from '@testing-library/react';

const mockItemCounter = vi.fn((props: unknown) => {
    return (
        <div data-testid="ItemCounter" />
    );
});

vi.mock('../src/shopping-cart/ItemCounter', () => ({
    default: (props: unknown) => mockItemCounter(props)
}));

import {
    FirstStepsApp,
    itemsInCart
} from '../src/FirstStepsApp';

describe('FirstStepsApp', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    test('should match snapshot', () => {
        const { container } = render(<FirstStepsApp />);
        expect(container).toMatchSnapshot();
    });

    test('should render the correct number of ItemCounter components', () => {
        render(<FirstStepsApp />);

        const itemCounters = screen.getAllByTestId('ItemCounter');

        expect(itemCounters.length).toBe(itemsInCart.length);
    });

    test('should render ItemCounter with correct props', () => {
        render(<FirstStepsApp />);

        expect(mockItemCounter).toHaveBeenCalledTimes(itemsInCart.length);  // falla porque se renderizo 9 veces, 3 por cada test. Debo limpiar los mocks con afterEach
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Nintendo Switch 2',
            quantity: 1,
        });

        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Pro Controller',
            quantity: 2
        });

        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Super Smash',
            quantity: 5
        });
    });
});
