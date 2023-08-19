import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {ICast, ICredits, IDetails} from '../interfaces/MovieInterfaces';

interface IMovieDetails {
  isLoading: boolean;
  details?: IDetails;
  cast: ICast[];
}

const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<IMovieDetails>({
    isLoading: true,
    details: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const detailPromise = await movieDB.get<IDetails>(`/${movieId}`);
    const castPromise = await movieDB.get<ICredits>(`/${movieId}/credits`);

    const [detailResp, castResp] = await Promise.all([
      detailPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      details: detailResp.data,
      cast: castResp.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state,
  };
};

export default useMovieDetails;
