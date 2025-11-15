import { API_BASE_URL } from '../constants/api';
import { PATHS } from '../constants/paths';
import type { IFilm } from '../types/films.type';
import axios from 'axios';

class Films {
  async getFilms(): Promise<IFilm[]> {
    const response = await axios.get<IFilm[]>(API_BASE_URL + PATHS.films);
    return response.data;
  }
}

export const filmsService = new Films();