import { Loader } from 'components/Loader/Loader';
import { NoReviews } from 'components/NoReviews/NoReviews';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import { useFetch } from 'hooks/useFetch';
import React from 'react'
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/theMoviedbAPI';

const Reviews = () => {
  const { movieid } = useParams();
  const { data, isLoading, error } = useFetch(fetchReviews, movieid);

  if (error) return (<p>{error.message}</p>);

  return (
    <div>
      {isLoading && <Loader />}
      {data && data?.results.length > 0 && <ReviewsList reviews={data.results} />}
      {data?.results.length === 0 && <NoReviews />}
    </div>
  );
}

export default Reviews;