import PropTypes from 'prop-types'

import { GifElement } from './GifElement';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ categoryName }) => {

    const { categoryGifs, isLoading } = useFetchGifs(categoryName);

    return (
        <>
            <h3> {categoryName} </h3>
            {
                isLoading ?
                    (<h2>Cargando...</h2>)
                    : null
            }
            <div className='card-grid'>
                {
                    categoryGifs.map((gif) => {
                        return (
                            <GifElement
                                key={gif.id}
                                title={gif.title}
                                url={gif.url} />
                        );

                    })
                }

            </div>

        </>
    );

}
GifGrid.propTypes = {
    categoryName: PropTypes.string.isRequired,
}
