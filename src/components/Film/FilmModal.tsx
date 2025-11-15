import { X } from "lucide-react"
import type { IFilmModalProps } from "../../types/films.type"
import { Button } from "../../ui/Button"

export function FilmModal({ film, open, onClose }: IFilmModalProps) {
    if (!open || !film) return null;

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={onClose}
        >
            <div
                className="
                    bg-box border border-box-border rounded-2xl
                    w-full max-w-3xl h-auto p-4 sm:p-6 relative shadow-2xl animate-fadeIn
                    flex flex-col sm:flex-row gap-4 sm:gap-6
                "
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-secondary hover:text-white transition"
                >
                    <X size={26} />
                </button>

                <div className="w-full sm:w-1/2 rounded-xl overflow-hidden">
                    <img
                        src={film.poster}
                        alt={film.title}
                        className="w-full h-64 sm:h-full object-cover"
                    />
                </div>

                <div className="w-full sm:w-1/2 flex flex-col justify-between">
                    <div>
                        <h2 className="text-heading-1 text-xl sm:text-2xl font-bold mb-2">
                            {film.title}
                        </h2>

                        <div className="flex flex-wrap gap-3 text-sm sm:text-base mb-3 items-center">
                            <span className="text-accent font-semibold text-lg sm:text-xl">
                                {film.rating}/10
                            </span>
                            <span className="text-secondary text-lg sm:text-xl">
                                {film.year}
                            </span>
                            <span className="bg-genre text-genre text-xs px-3 py-1 rounded-md">
                                {film.genre}
                            </span>
                        </div>

                        <p className="text-description text-sm sm:text-base leading-relaxed">
                            {film.description}
                        </p>
                    </div>

                    <div className="mt-4 sm:mt-6">
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    );
}
