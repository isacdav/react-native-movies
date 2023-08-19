import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {IMovie, IMoviesResponse} from '../interfaces/MovieInterfaces';

interface IMoviesState {
  nowPlaying: IMovie[];
  popular: IMovie[];
  topRated: IMovie[];
  upcoming: IMovie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<IMoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlayingPromise = movieDB.get<IMoviesResponse>('/now_playing');
    const popularPromise = movieDB.get<IMoviesResponse>('/popular');
    const topRatedPromise = movieDB.get<IMoviesResponse>('/top_rated');
    const upcomingPromise = movieDB.get<IMoviesResponse>('/upcoming');

    const resps = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setMovies({
      nowPlaying: resps[0].data.results,
      popular: resps[1].data.results,
      topRated: resps[2].data.results,
      upcoming: resps[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...movies,
    isLoading,
  };
};
