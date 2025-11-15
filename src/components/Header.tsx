import { Film, Moon, Sun } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

export function Header() {
    const { theme, toggleTheme } = useThemeStore();

    return (
        <header className="bg-elements border-b border-box-border shadow-box">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2 flex-shrink-0">
                        <Film className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                        <span className="text-heading-1 text-xl font-bold hidden lg:block">Movies</span>
                    </div>

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-box border border-box-border hover:bg-accent hover:text-white transition-colors"
                        aria-label="Переключить тему"
                    >
                        {theme === 'light' ? (
                            <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
                        ) : (
                            <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        )}
                    </button>
                </div>
            </nav>
        </header>
    );
}