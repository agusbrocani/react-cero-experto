import {
    describe,
    expect,
    test
} from 'vitest';
import MyAwesomeApp from '../src/MyAwesomeApp';
import {
    render,
    screen
} from '@testing-library/react';

describe('MyAwesomeApp', () => {
    test('should render firstName and lastName', () => {
        // HTML donde renderizó mi componente de prueba
        // render(<MyAwesomeApp />);
        // screen.debug();

        // Montar el componente
        /*
        const { container } = render(<MyAwesomeApp />);

        // console.log(container);
        console.log(document.body); // este va a ser el DOM donde voy a renderizar cosas, equivalente al div de id root del HTML real
        console.log(container.innerHTML);
    */

        /*
            const { container } = render(<MyAwesomeApp />);
            // Creo los tags que voy a buscar
            const h1 = container.querySelector('h1');
            // h1?.innerHTML tiene el contenido del tag del componente => 'Agustín'
            expect(h1?.innerHTML).toBe('Agustín');
            // toContain: assert que da TRUE si contiene PARTE DEL TEXTO enviado por párametro
            expect(h1?.innerHTML).toContain('Agustín');
    
            const h3 = container.querySelector('h3');
            expect(h3?.innerHTML).toContain('Brocani');
        */
        render(<MyAwesomeApp />);
        screen.debug();
        // const h1 = screen.getByRole('heading', {
        //     level: 1
        // });
        const h1 = screen.getByTestId('first-name-title');

        expect(h1.innerHTML).toContain('Agustín');
    });

    test('should match snapshot', () => {
        // const { container } = render(<MyAwesomeApp />);
        // expect(container).toMatchSnapshot();
        render(<MyAwesomeApp />);
        expect(screen.getByTestId('div-app')).toMatchSnapshot();
    });
});
