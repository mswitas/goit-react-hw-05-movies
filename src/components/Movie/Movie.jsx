import PropTypes from "prop-types"
import React, { Suspense, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import css from "./Movie.module.css";
import { Loader } from "components/Loader/Loader";

export const Movie = ({ movie }) => {
    const path = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
    const location = useLocation();
    const [backLinkHref] = useState(location.state?.from ?? "/");

    return (
        <div className={css.Movie}>
            <Link
                to={backLinkHref}
                className={css.goBackLink}
            ><button className={css.goBackBtn}><i className={css.arrow} /><span>Go back</span></button></Link>
            <div className={css.mainInfoWrapper}>
                <img src={path} width="342" alt={movie.title} />
                <div className={css.mainInfo}>
                    <h1>{movie.title} ({movie.release_date.slice(0, 4)})</h1>
                    <p>User score: {movie.vote_average}</p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    <ul className={css.genresList}>
                        {movie.genres.map(genre => {
                            return (
                                <li key={genre.id}>{genre.name}</li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <div className={css.additionalInfoMenu}>
                    <p>Additional information</p>
                    <ul>
                        <li><Link to="cast">Cast</Link></li>
                        <li><Link to="reviews">Reviews</Link></li>
                    </ul>
                </div>
                <hr />
            </div>
            <div className={css.additionalInfo}>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    );
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
}
