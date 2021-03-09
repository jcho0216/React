import React from 'react'
import propTypes from "prop-types";


const Movie = ({id, title, summary, poster, year}) => {
    
    return (
        <>
        <h5>{title}</h5>
        </>
    )
}


// eslint-disable-next-line react/no-typos
Movie.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    year: propTypes.number.isRequired
}


export default Movie;