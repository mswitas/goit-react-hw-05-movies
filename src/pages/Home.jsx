import { Loader } from "components/Loader/Loader";
import { MovieList } from "components/MovieList/MovieList";
import { useFetch } from "hooks/useFetch";
import css from "./Home.module.css";
import { fetchMovies } from "services/theMoviedbAPI";

const Home = () => {
  const { data, isLoading, error } = useFetch(fetchMovies);
  
  if (error) return (<div>{error.message}</div>);
  
  return (
    <div className={css.Home}>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {data && <MovieList movies={data.results} />}
    </div>
  );
}

export default Home;
