import React from "react";
import propTypes from "prop-types";
import * as S from "./style";

const Movie = ({ id, title, summary, poster, year, genres }) => {
  return (
    <>
      <div>
        <img src={poster} alt={title} title={title} />
        <div>
          <h3>{title}</h3>
          <h5>{year}</h5>
          <S.Genre>
            <h3>
              {genres.map((genre) => (
                <li>{genre}</li>
              ))}
            </h3>
          </S.Genre>
          <p>{summary}</p>

         
        </div>
      </div>
    </>
  );
};

Movie.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
  genre: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
