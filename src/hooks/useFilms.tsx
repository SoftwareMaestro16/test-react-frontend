import { useQuery } from '@tanstack/react-query';
import type { IFilm } from '../types/films.type';
import { filmsService } from '../services/getFilms.service';

export function useFilms() {
  const { data, isLoading, isError } = useQuery<IFilm[]>({
    queryKey: ['films'],
    queryFn: () => {
      return filmsService.getFilms();
    },
    staleTime: 60_000,
  });

  return { data, isLoading, isError };
}