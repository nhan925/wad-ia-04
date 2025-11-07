import { Board } from './board';
import { ArrowDownNarrowWide, ArrowDownWideNarrow, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGameState } from '@/hooks';

export function Game() {
    const {
        history,
        currentMove,
        isAscending,
        xIsNext,
        currentSquares,
        handlePlay,
        jumpTo,
        toggleSortOrder,
        resetGame
    } = useGameState();

    const moves = history.map((entry, move) => {
        let description;

        if (move > 0) {
            const { row, col } = entry.location!;
            description = `Go to move #${move} (${row}, ${col})`;
        } else {
            description = 'Go to game start';
        }
        
        // Show current move as text instead of button
        if (move === currentMove) {
            return (
                <li key={move} className="py-2 font-bold">
                    You are at move #{move}{move > 0 && ` (${entry.location!.row}, ${entry.location!.col})`}
                </li>
            );
        }
    
        return (
            <li key={move} className="py-2">
                <button onClick={() => jumpTo(move)} className="hover:text-blue-600">
                    {description}
                </button>
            </li>
        );
    });

    // Sort moves based on isAscending
    const sortedMoves = isAscending ? moves : [...moves].reverse();

    return (
        <div className="flex gap-8 justify-center items-center w-full h-full p-8">
            <div className="w-100">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>

            <div className="bg-white/15 rounded-xl shadow-md backdrop-blur-md max-h-[80dvh] overflow-y-auto px-4 py-2 w-64">
                <div className="mb-4 pt-2 flex justify-between items-center">
                    <p className="text-lg font-bold">Move History</p>
                    <div className="flex gap-1">
                        <Button onClick={resetGame} variant="ghost" size="icon-sm">
                            <RotateCcw />
                        </Button>

                        <Button onClick={toggleSortOrder} variant="ghost" size="icon-sm">
                            {isAscending ? <ArrowDownNarrowWide /> : <ArrowDownWideNarrow />}
                        </Button>
                    </div>
                </div>
                    
                <ol className="divide-y grid grid-cols-1">{sortedMoves}</ol>
            </div>
        </div>
    );
}