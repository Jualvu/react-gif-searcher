import { useState } from 'react';
import PropTypes from 'prop-types';


export const InputAddCategory = ({ onNewCategory }) => {

    const [inputText, setInputText] = useState('');

    //metodo para manejar nuevos caracteres en el input para mostrarlos
    const handleChangeNewCategory = (event) => {
        //event es un evento de html, que retorna datos tras una interaccion. dentro de todos los datos
        // esta el target.value que es el texto que se esta introduciendo en el input
        setInputText(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //si el input tiene menos de 1 caracter no se sube el formulario
        if (inputText.trim().length <= 1) return;

        //PASAR DE VUELTA AL COMPONENTE PADRE EL INPUTTEXT
        onNewCategory(inputText);
        setInputText('');

    }

    return (
        <form onSubmit={(event) => onSubmit(event)} aria-label='form'>

            <input
                type='text'
                value={inputText}
                placeholder='Buscar gifs'
                onChange={handleChangeNewCategory}
            />

        </form>

    );

}
InputAddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}