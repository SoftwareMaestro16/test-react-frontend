import { useState } from "react"
import type { IFilm } from "../../types/films.type"
import { FilmModal } from "./FilmModal"

export function FilmCard(film: IFilm) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div
                className="bg-box border border-box-border rounded-2xl p-4 hover:shadow-xl transition-all duration-200"
            >
                <div className="w-full aspect-[2/3] overflow-hidden rounded-xl mb-3">
                    <img src={film.poster} alt={film.title} className="w-full h-full object-cover" />
                </div>

                <div className="space-y-2">
                    <h2 className="text-heading-1 text-lg font-semibold line-clamp-1">{film.title}</h2>

                    <div className="flex justify-between items-center text-sm">
                        <span className="text-accent font-semibold">{film.rating}/10</span>
                        <span className="text-secondary">{film.year}</span>
                    </div>

                    <p className="text-description text-sm line-clamp-2">{film.description}</p>

                    <div className="flex justify-between items-center pt-1">
                        <span className="bg-genre text-genre text-xs px-2 py-1 rounded-md">
                            {film.genre}
                        </span>

                        <button
                            onClick={() => setOpen(true)}
                            className="bg-button text-button text-sm px-4 py-1.5 rounded-full hover:opacity-80 transition-opacity"
                        >
                            Смотреть
                        </button>
                    </div>
                </div>
            </div>

            <FilmModal
                film={film}
                open={open}
                onClose={() => setOpen(false)}
            />
        </>
    )
}
