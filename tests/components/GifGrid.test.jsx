import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

/* eslint-disable no-undef */

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en componente GifGrid', () => {

    const categoryName = 'One Punch Man';

    test('debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            categoryGifs: [],
            isLoading: true
        });

        render(<GifGrid categoryName={categoryName} />);
        // screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(categoryName));

    });

    test('debe mostrar items cuando se cargan los gifs de useFetchGifs', () => {

        const gifs =
            [
                {
                    id: 'ABC',
                    title: 'Saitama',
                    url: 'https://localhost/saitama/jpg'
                },
                {
                    id: '123',
                    title: 'Goku',
                    url: 'https://localhost/goku/jpg'
                }
            ];

        useFetchGifs.mockReturnValue({
            categoryGifs: gifs,
            isLoading: false
        });

        render(<GifGrid categoryName={categoryName} />);
        // screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);

    });


})