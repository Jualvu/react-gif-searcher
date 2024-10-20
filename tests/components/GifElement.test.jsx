import { render, screen } from '@testing-library/react';
import { GifElement } from '../../src/components/GifElement'

/* eslint-disable no-undef */
describe('Pruebas en componente GifElement', () => {

    const title = 'Satiama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Prueba match con Snapshot ', () => {
        const { container } = render(<GifElement title={title} url={url} />);
        expect(container).toMatchSnapshot();

    });

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {

        render(<GifElement title={title} url={url} />);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });

});