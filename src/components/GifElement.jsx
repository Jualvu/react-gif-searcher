import PropTypes from 'prop-types'

export const GifElement = ({ title, url }) => {
    return (

        <div className='card'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>

    );

}
GifElement.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};