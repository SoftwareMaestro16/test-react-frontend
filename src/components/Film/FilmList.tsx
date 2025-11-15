import { useState, useMemo } from 'react';
import { useFilms } from '../../hooks/useFilms';
import { Banner } from '../../ui/Banner';
import { FilmCard } from './FilmCard';
import { Search } from 'lucide-react';

export function FilmList() {
    const { data, isLoading, isError } = useFilms();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredFilms = useMemo(() => {
        if (!data) return [];

        return data.filter(
            (film) =>
                film.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                film.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                film.genre.toLowerCase().includes(searchQuery.toLowerCase()),
        );
    }, [data, searchQuery]);

    if (isLoading) {
        return (
            <div className="w-full h-[70vh] flex items-center justify-center">
                <Banner type="loading" />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="w-full h-[70vh] flex items-center justify-center">
                <Banner type="error" />
            </div>
        );
    }

    return (
        <div className="mt-7 sm:mt-12 px-5 sm:px-15">
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <h1 className="text-heading-1 text-2xl font-bold">Каталог Фильмов:</h1>

                    <div className="w-full sm:w-85 relative">
                        <input
                            type="text"
                            placeholder="Поиск фильмов..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-box border border-box-border rounded-lg py-2 pr-10 pl-4 text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-secondary" />
                        </div>
                    </div>
                </div>

                {filteredFilms.length === 0 && searchQuery && (
                    <div className="text-center py-8">
                        <p className="text-text-secondary">По запросу "{searchQuery}" ничего не найдено</p>
                    </div>
                )}

                <div
                    className="
                        grid 
                        grid-cols-1 
                        xs:grid-cols-2 
                        sm:grid-cols-2 
                        md:grid-cols-3 
                        lg:grid-cols-4 
                        gap-5
                    "
                >
                    {filteredFilms.map((film) => (
                        <FilmCard key={film.id} {...film} />
                    ))}
                </div>
            </div>
        </div>
    );
}
