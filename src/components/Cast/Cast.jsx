import { CastList } from 'components/CastList/CastList';
import { Loader } from 'components/Loader/Loader';
import { useFetch } from 'hooks/useFetch'
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/theMoviedbAPI';

const Cast = () => {
  const { movieid } = useParams();
  const { data, isLoading, error } = useFetch(fetchCast, movieid);
  
  if (error) return (<p>{error.message}</p>);
  
  return (
    <div>
      {isLoading && <Loader />}
      {data && <CastList cast={data.cast} />}
    </div>
  );
}

export default Cast;