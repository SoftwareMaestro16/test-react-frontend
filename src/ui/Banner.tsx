import { AlertTriangle, Loader2 } from 'lucide-react';

interface BannerProps {
  type: 'error' | 'loading';
  message?: string;
  subtext?: string; 
}

export function Banner({ type, message, subtext }: BannerProps) {
  const isError = type === 'error';

  const defaultMessage = isError
    ? 'Ошибка загрузки фильмов'
    : 'Идет загрузка фильмов...';

  const defaultSubtext = isError
    ? 'Проверьте подключение к сети или попробуйте позже.'
    : 'Пожалуйста подождите, мы получаем данные.';

  return (
    <div
      className={`bg-box border border-box-border rounded-2xl p-8 w-full max-w-md text-center ${
        isError ? 'border-accent/60' : ''
      }`}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-box-border/30">
          {isError ? (
            <AlertTriangle className="h-10 w-10 text-accent" />
          ) : (
            <Loader2 className="h-10 w-10 text-accent animate-spin" />
          )}
        </div>

        <span className="text-heading-1 text-xl font-semibold">
          {message || defaultMessage}
        </span>

        <p className="text-description text-sm max-w-xs opacity-80">
          {subtext || defaultSubtext}
        </p>
      </div>
    </div>
  );
}
