/* eslint-disable no-unused-vars */
import React from 'react'



// eslint-disable-next-line react/prop-types
export const GifElement = ({ title, url }) => {
    return (

        <div className='card'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>

    );

}