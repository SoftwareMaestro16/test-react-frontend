export interface IFilm {
    id: number;
    title: string;
    description: string;
    poster: string;
    rating: number;
    genre: string;
    year: number;
}

export interface IFilmModalProps {
    film: IFilm | null
    open: boolean
    onClose: () => void
}
