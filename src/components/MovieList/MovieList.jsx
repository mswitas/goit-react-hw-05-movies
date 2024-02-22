import PropTypes from "prop-types"
import { Link, useLocation } from 'react-router-dom'
export const MovieList = ({ movies }) => {
    const location = useLocation();
    return (
        <ul>
            {movies.map((movie) => {
                return (
                    <li key={movie.id}><Link to={`/movies/${movie.id}`} state={{from: location}}>{movie.title ? movie.title : movie.name}</Link></li>
                );
            })}
        </ul>
    );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
}
