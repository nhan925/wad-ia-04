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
                <li key={move} className="py-3 font-bold">
                    You are at move #{move}{move > 0 && ` (${entry.location!.row}, ${entry.location!.col})`}
                </li>
            );
        }
    
        return (
            <li key={move} className="py-3 hover:text-blue-600 cursor-pointer" onClick={() => jumpTo(move)}>
                {description}
            </li>
        );
    });

    // Sort moves based on isAscending
    const sortedMoves = isAscending ? moves : [...moves].reverse();

    return (
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 justify-center items-center w-full h-full p-4 md:p-6 lg:p-8 overflow-auto">
            {/* Game Board Container */}
            <div className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[550px]">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>

            {/* Move History Panel */}
            <div className="bg-white/15 rounded-xl shadow-md backdrop-blur-md max-h-[40vh] lg:max-h-[80vh] overflow-y-hidden w-full max-w-[400px] md:max-w-[500px] lg:max-w-[280px] flex flex-col">
                <div className="py-2 flex justify-between items-center sticky top-0 bg-white/15 backdrop-blur-sm z-10 px-4">
                    <p className="text-base md:text-lg font-bold">Move History</p>
                    <div className="flex gap-1">
                        <Button onClick={resetGame} variant="ghost" size="icon-sm" title="Reset Game">
                            <RotateCcw className="size-4 md:size-5" />
                        </Button>

                        <Button onClick={toggleSortOrder} variant="ghost" size="icon-sm" title="Toggle Sort Order">
                            {isAscending ? <ArrowDownNarrowWide className="size-4 md:size-5" /> : <ArrowDownWideNarrow className="size-4 md:size-5" />}
                        </Button>
                    </div>
                </div>
                
                <ol className="divide-y grid grid-cols-1 text-sm md:text-base px-4 my-2 overflow-y-auto w-full">{sortedMoves}</ol>
            </div>
        </div>
    );
}