interface SquareProps {
    value: string | null;
    onSquareClick: () => void;
    isWinning?: boolean;
}

export function Square({ value, onSquareClick, isWinning = false }: SquareProps) {
  return (
    <button 
        className={`w-full h-full aspect-square text-lg ${isWinning ? 'bg-yellow-300/50' : ''} ${value === 'X' ? 'text-blue-600' : value === 'O' ? 'text-red-600' : ''} font-bold hover:text-2xl transition-all duration-200 ease-in-out`} 
        onClick={onSquareClick}
    >
        {value}
    </button>
  );
}