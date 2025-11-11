interface SquareProps {
    value: string | null;
    onSquareClick: () => void;
    isWinning?: boolean;
}

export function Square({ value, onSquareClick, isWinning = false }: SquareProps) {
  return (
    <button 
        className={`
            w-full h-full aspect-square 
            text-3xl md:text-4xl lg:text-5xl
            ${isWinning ? 'bg-yellow-300/50 dark:bg-yellow-500/30' : ''} 
            ${value === 'X' ? 'text-blue-600 dark:text-blue-400' : value === 'O' ? 'text-red-600 dark:text-red-400' : ''} 
            font-bold 
            hover:bg-white/10 active:bg-white/20
            transition-all duration-200 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-inset
            disabled:opacity-50 disabled:cursor-not-allowed
        `} 
        onClick={onSquareClick}
        disabled={value !== null}
        aria-label={value ? `Square filled with ${value}` : 'Empty square'}
    >
        {value}
    </button>
  );
}