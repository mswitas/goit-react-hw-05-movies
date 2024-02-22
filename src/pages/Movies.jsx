import { Loader } from "components/Loader/Loader";
import { MovieList } from "components/MovieList/MovieList";
import { Searchbar } from "components/Searchbar/Searchbar";
import { useFetch } from "hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import css from "./Movies.module.css";
import { fetchMoviesByQueryString } from "services/theMoviedbAPI";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieTitle = searchParams.get("title") ?? "";
  const { data, isLoading, error } = useFetch(fetchMoviesByQueryString, movieTitle);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.elements.movie.value;
    setSearchParams({ title: query });
  }

  if (error) return (<div>{error.message}</div>);

  return (
    <div className={css.Movies}>
      <Searchbar handleSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {data && <MovieList movies={data.results} />}
    </div>
  );
}

export default Movies;