import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json");

    console.log(movies);
    this.setState({ movies: movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section>
        {isLoading ? (
          <div>
            <div>lOADING...</div>
          </div>
        ) : (
          movies.map((movie) => {
            console.log(movie);

            return (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                year={movie.year}
               
              />
            );
          })
        )}
      </section>
    );
  }
}

export default App;
