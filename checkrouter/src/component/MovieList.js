import React from 'react'
import MovieCard from './MovieCard'

const MovieList=({movies})=> {
    return (
        <div style={{ display: "flex" }}>
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    )
}

export default MovieList;
