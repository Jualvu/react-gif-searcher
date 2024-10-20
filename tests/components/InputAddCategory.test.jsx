import { fireEvent, render, screen } from '@testing-library/react';
import { InputAddCategory } from '../../src/components/InputAddCategory'
/* eslint-disable no-undef */
describe('Pruebas en componente InputAddCategoy', () => {


    test('Debe cambiar el valor de la caja de texto', () => {

        render(<InputAddCategory onNewCategory={() => { }} />)
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama' } });

        expect(input.value).toBe('Saitama');
        // screen.debug();
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Saitma';
        //las jest functions (jest.fn) son funciones de prueba creadas por jest auto
        const onNewCategory = jest.fn();

        render(<InputAddCategory onNewCategory={onNewCategory} />)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');

        //esta prueba evalua que onNewCategory haya sido llamada con el valor del inputValue
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        // screen.debug();

    });

    test('No debe de llamar el onNewCategory si el input esta vacio', () => {
        //definir la mock fn 
        const onNewCategory = jest.fn();

        //render y obtener el elemento form
        render(<InputAddCategory onNewCategory={onNewCategory} />)
        const form = screen.getByRole('form');

        //disparar submit con input vacio
        fireEvent.submit(form);

        //comprobar que la funcion onNewcCategory no se haya llamado 
        expect(onNewCategory).toHaveBeenCalledTimes(0);

    });

});