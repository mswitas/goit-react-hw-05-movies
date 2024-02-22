import { Loader } from "components/Loader/Loader";
import { Movie } from "components/Movie/Movie";
import { useFetch } from "hooks/useFetch"
import { useParams } from "react-router-dom";
import { fetchMovieById } from "services/theMoviedbAPI";

const MovieDetails = () => {
  const { movieid } = useParams();
  const { data, isLoading, error } = useFetch(fetchMovieById, movieid);

  if (error) return (<div>{error.message}</div>);
  
  return (
    <>
      {isLoading && <Loader />}
      {data && <Movie movie={data} />}
    </>
  );
}

export default MovieDetails;