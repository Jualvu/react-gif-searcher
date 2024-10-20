/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertsApp";

describe('pruebas en componente GifExpertsApp', () => {

    test('prueba de que exista Gif Expert App', () => {

        render(<GifExpertApp />);
        screen.debug();

        expect(screen.getByText('Gif Expert App'));


    });

    test('prueba de que se creen mas headers lvl3 cuando se buscan gifs', () => {

        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: 'Luffy' } });
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThan(1);



    });

});